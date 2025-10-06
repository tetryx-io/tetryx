import { getObjects, saveObject } from "@/lib/algolia";
import { NotionCompatAPI } from "notion-compat";
import _ from "lodash";
import { Client } from "@notionhq/client";

const notion = new NotionCompatAPI(
  new Client({ auth: process.env.NOTION_SECRET_KEY }),
);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  try {
    if (token !== process.env.WEBHOOK_TOKEN) {
      return new Response(JSON.stringify({ message: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      const algoliaObject: any = await getObjects("pages");
      const pages = algoliaObject.hits;
      const ids: any = [];

      // Sort by updatedAt (DESC)
      let page_sorted = _.sortBy(pages, [(p) => -p.updatedAt]);

      // Process only the first 200 pages to avoid timeouts
      let num_elems_to_process: number = _.min([page_sorted.length, 200]) || 0;
      console.log(
        "Processing only the first ",
        num_elems_to_process,
        "pages of ",
        page_sorted.length,
        "pages",
      );

      // Process the elements in parallel.
      // This is much faster than processing them sequentially
      let promises: any = [];
      for (let i = 0; i < num_elems_to_process; i++) {
        let p = notion.getPage(page_sorted[i].objectID);
        promises.push(p);
      }

      for (let i = 0; i < num_elems_to_process; i++) {
        const notionObject = await promises[i];
        console.log(
          `↪ Webhook ${token}: ${i}/${num_elems_to_process}. Fetched: page id`,
          page_sorted[i].objectID,
          page_sorted[i].updatedAt,
        );
        ids.push({ block_id: page_sorted[i].objectID });
        await saveObject("pages", page_sorted[i].objectID, notionObject);
      }

      return new Response(JSON.stringify({ message: "Success", data: ids }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Failed!" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
