import React from "react";
import NotionBody from "@/components/Notion/NotionBody";
import Head from "next/head";
import _ from "lodash";

function Docs(props) {
  const { page, title: base_page_config, error } = props;

  let title = _.get(
    page,
    ["raw", "page", "properties", "title", "title", 0, "plain_text"],
    base_page_config?.page_title
  );

  if (error) {
    return (
      <div className={"flex items-center justify-center h-screen"}>
        Error loading page
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="">
        <div id="top" />
        <NotionBody {...props} />
      </div>
    </>
  );
}

export default Docs;
