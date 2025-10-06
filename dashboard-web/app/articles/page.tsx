import { DefaultLayout } from "@/components/Layouts";
import Wiki from "@/components/Pages/Wiki";
import { contentPageConfig } from "@/config/site";
import { getSorted, getObject } from "@/lib/algolia";
import { wikiPage } from "@/lib/constant";
import React from "react";

const IndexPage = async () => {
  const getWikiPageData = async () => {
    const page_num = 0;
    const page_size = 9;
    const page_config = contentPageConfig["WIKI"];

    let posts = await getSorted({
      index: "wiki_sort_creation_date_desc",
      page_size,
      page: page_num,
    });

    const { baseMenu } = wikiPage;
    const page_menu = await getObject("menus", page_config["root_block_id"]);
    return {
      posts: posts,
      page_menu,
      title: baseMenu.name,
    };
  };

  const data = await getWikiPageData();
  return (
    // <DefaultLayout>
    <Wiki {...data} />
    // </DefaultLayout>
  );
};
IndexPage.layout = "Private";

export default IndexPage;
