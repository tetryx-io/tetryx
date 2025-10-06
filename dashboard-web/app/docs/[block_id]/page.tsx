import Docs from "@/components/Docs";
import { contentPageConfig } from "@/config/site";
import { getObject } from "@/lib/algolia";
import { fetchNotionPageData } from "@/lib/request";
import ContentLayout from "@/components/Layout/Content";

const IndexPage = async ({
  params: { block_id },
}: {
  params: { block_id: string };
}) => {
  const getDocsPageById = async () => {
    const page_config = contentPageConfig["DOCS"];
    const page_data = await fetchNotionPageData({
      page_url: block_id,
      algolia_index: page_config["algolia_index"],
      root_block_id: page_config["root_block_id"],
    });

    const page_menu = await getObject("menus", page_config["root_block_id"]);
    return {
      ...page_data,
      page_menu,
      base_page_config: page_config,
    };
  };

  const data = await getDocsPageById();

  return (
    <ContentLayout {...data}>
      <Docs {...data} />
    </ContentLayout>
  );
};

export default IndexPage;
