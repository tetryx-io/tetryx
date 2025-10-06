// @ts-nocheck
import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";
import _ from "lodash";
import urlJoin from "url-join";
import { getPageTitle } from "@/lib/notion";

export default ({ page, base_page }:any) => {
  base_page = base_page || "/articles";
  const _id = _.get(page, "raw.page.id");
  const cover_url = _.get(page, "raw.page.cover.external.url");
  const page_title = getPageTitle(page);

  const paragraphs = _.filter(_.get(page, "raw.children", []), (child) => {
    return child.type === "paragraph";
  });

  const paragraph_texts = _.map(paragraphs, (child) => {
    return _.map(child.paragraph.rich_text, (c) => c.plain_text).join(" ");
  });

  let par_lengths = 0;
  let preview_paragraphs = [];

  for (let i = 0; i < paragraph_texts.length; i++) {
    const paragraph = paragraph_texts[i];
    if (par_lengths > 250) {
      break;
    }
    par_lengths += paragraph.length;
    preview_paragraphs.push(paragraph);
  }

  const page_url = _.get(page, "raw.page.url", "").replace(
    "https://www.notion.so/",
    ""
  );
  const fullUrl = urlJoin(base_page, page_url);

  return (
    <article
      key={_id}
      className="flex flex-col md:w-full h-full py-0 px-0 md:p-6 bg-white dark:bg-black shadow border border-white dark:border-zinc-600 md:focus-within:ring ring-violet-300 md:hover:shadow-purple md:focus-within:shadow-purple transition-all relative rounded md:shadow-sm-purple"
    >
      <img
        src={cover_url}
        className="max-w-full md:max-w-none h-64 object-cover md:-mx-6 md:-mt-6 mb-8 rounded-t"
        alt=""
      />
      <span className="flex items-center justify-between w-full text-[11px] font-[650] uppercase tracking-wider text-[#73739C]">
        {" "}
        {/*<span className="truncate"> By Peter W. Njenga </span>{" "}*/}
        <div className="flex-1 bg-gray-100 h-px mx-2"></div>{" "}
        <span className="hidden xs:block"> 5&nbsp;min&nbsp;Read </span>{" "}
      </span>{" "}
      <h1 className="font-heading px-2 lg:px-0 text-[1.4rem] font-semibold text-navy my-4">
        {" "}
        {page_title}
      </h1>{" "}
      {_.map(preview_paragraphs, (paragraph, i) => {
        return (
          <p className="text-base line-clamp-3 px-2 lg:px-0 mb-5" key={i}>
            {paragraph}
          </p>
        );
      })}
      <p aria-hidden="true" className="text-violet-600 font-semibold mt-auto">
        {" "}
        Read more&nbsp;
        <ArrowRightCircleIcon
          role="img"
          className="h-4 inline-flex opacity-50"
        ></ArrowRightCircleIcon>
      </p>
      {fullUrl && (
        <Link href={fullUrl} className="opacity-0 absolute inset-0">
          {" "}
          <span className="sr-only"> Read more about {page_title}</span>{" "}
        </Link>
      )}
    </article>
  );
};
