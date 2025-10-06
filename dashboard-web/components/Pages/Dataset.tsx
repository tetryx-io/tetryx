// @ts-nocheck
import React from "react";
import Head from "next/head";
import Link from "next/link";

export default (props) => {
  // console.log(props.data.dataframe);

  return (
    <>
      <Head>
        <title>Reframe » Datasets » An Analytical Vector-search Database</title>
      </Head>
      <div className="w-full min-h-screen p-8 pt-24 bg-gray-200 dark:bg-neutral-900">
        <div className="grid lg:grid-cols-4 2xl:grid-cols-8 gap-4">
          {props.data.dataframe.map((dataset, index) => (
            <Link href={`/datasets/${dataset.slug}`}>
              <div
                className="w-full rounded-lg bg-white dark:bg-black shadow lg:max-w-sm"
                key={dataset.id}
              >
                <div className="p-4">
                  <h4 className="text-xl font-semibold text-blue-600">
                    {dataset.name}
                  </h4>
                  <p className="mb-2 leading-normal">{dataset.slug}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
