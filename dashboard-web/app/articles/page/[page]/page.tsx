import { DefaultLayout } from "@/components/Layouts";
import Docs from "@/components/Pages/Wiki";
import { getSorted } from "@/lib/algolia";
import { wikiPage } from "@/lib/constant";
import _clamp from "lodash/clamp";

const Page = async ({ params: { page } }) => {
  const getWikiPageData = async () => {
    const page_size = 9;
    const _page_num = Math.max(0, page ? page - 1 : 0);
    const page_num = isNaN(_page_num) ? 0 : _page_num;
    const offset = page_num * page_size;

    let posts: any = await getSorted({
      index: "wiki_sort_creation_date_desc",
      page_size,
      page: page_num,
    });

    const { block_id, baseMenu } = wikiPage;
    let total_pages = posts.nbPages + 1;
    let clamped_page_num = _clamp(page_num + 1, 1, total_pages);

    if (parseInt(page) !== clamped_page_num) {
      // Todo
      // res.writeHead(308, {
      //   Location: `/wiki/page/${clamped_page_num}`,
      // });
      // res.end();
      // return { props: {} };
    }

    return {
      wikiData: {
        posts: posts,
        title: baseMenu.name,
      },
    };
  };

  const result = await getWikiPageData();

  return (
    // <DefaultLayout>
    <Docs data={result} />
    // </DefaultLayout>
  );
};

export default Page;
