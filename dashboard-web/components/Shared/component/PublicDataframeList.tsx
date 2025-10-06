"use client";

import React, { Fragment, useEffect, useState } from "react";
import { TbArrowsSort, TbX } from "react-icons/tb";
import DatasetCard from "@/components/DatasetCard";
import DefaultButton from "../Button/DefaultButton";
import _ from "lodash";

import { useFetchPublicDataframeQuery } from "@/generated/graphql";

const PublicDataframeList = () => {
  const { data, loading } = useFetchPublicDataframeQuery();
  const _dataframes = _.get(data, "public_dataframe", []);

  const [dataframes, setDataframes] = useState<any>([]);
  const [activeTags, setActiveTags] = useState<any>([]);
  const [sort, setSort] = useState("asc");

  let tags = [];
  _dataframes.forEach((d: any) => {
    tags = Array.from(new Set(tags.concat(d.tags)));
  });

  useEffect(() => {
    if (data) {
      setDataframes(_dataframes);
    } 
  }, [data]);

  useEffect(() => {
    if (activeTags.length) {
      filterData();
    } else {
      setDataframes(_dataframes);
    }
  }, [activeTags]);

  const filterData = () => {
    const filterdData = _dataframes.filter((d: any) =>
      activeTags.some((tag) => (d.tags || []).includes(tag))
    );
    setDataframes(filterdData);
  };

  const sortData = () => {
    const order = sort === "asc" ? "desc" : "asc";
    let compareDates = (a: any, b: any): number =>
      new Date(a._up).getTime() - new Date(b._up).getTime();
    if (sort === "desc")
      compareDates = (a: any, b: any): number =>
        new Date(b._up).getTime() - new Date(a._up).getTime();
    const sortedData = JSON.parse(JSON.stringify(dataframes)).sort(compareDates);
    setDataframes([...sortedData]);
    setSort(order);
  };

  const selectTags = (tag: string) => {
    let tepm = [...activeTags];
    if (tepm.includes(tag)) {
      tepm = tepm.filter((t) => t !== tag);
    } else {
      tepm.push(tag);
    }
    setActiveTags(tepm);
  };

  return (
    <Fragment>
      <div className="mt-10">
        <p className="text-sm font-bold">DATA CATEGORIES</p>
      </div>
      <div className="flex sm:justify-between gap-10 mt-4">
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <div key={index}>
              <DefaultButton
                label={tag}
                variant="default"
                iconRight={
                  activeTags.includes(tag) ? (
                    <TbX color="white dark:black" />
                  ) : (
                    ""
                  )
                }
                styleClass={`rounded-full ${
                  activeTags.includes(tag)
                    ? "bg-black dark:bg-white text-white dark:text-black"
                    : ""
                }`}
                onClick={() => selectTags(tag)}
              />
            </div>
          ))}
        </div>
        <div className="hidden sm:flex flex-none">
          <DefaultButton
            label={
              <p>
                <strong className="font-bold">Sort by:</strong> Date added
              </p>
            }
            variant="default"
            iconLeft={<TbArrowsSort />}
            styleClass="rounded"
            onClick={sortData}
          />
        </div>
      </div>

      <div>
        {!loading ? (
          <div className="grid [@media(max-width:400px)]:grid-cols-1 grid-cols-2 md:grid-cols-3 min-w-80 gap-4 md:gap-9 mt-10">
            {dataframes.map((dataframe) => {
              return (
                <div
                  key={dataframe._id}
                  className="border hover:border-neutral-300 dark:border-neutral-600 hover:dark:border-neutral-500 p-4 rounded"
                >
                  <DatasetCard data={dataframe} />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex justify-center">
            <h1>Loading....</h1>
          </div>
        )}
      </div>

      <div className="w-full flex justify-center mt-12">
        <DefaultButton
          label="Load more"
          variant="default"
          styleClass="rounded"
          disabled
        />
      </div>
    </Fragment>
  );
};

export default PublicDataframeList;
