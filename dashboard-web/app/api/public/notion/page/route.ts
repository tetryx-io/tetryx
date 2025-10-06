import { NotionCompatAPI } from "notion-compat";
import { Client } from "@notionhq/client";
import { getObject, saveObject } from "@/lib/algolia";
import _ from "lodash";

const notion = new NotionCompatAPI(
  new Client({ auth: process.env.NOTION_SECRET_KEY }),
);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pageId = searchParams.get("pageId");
  const alg_index = searchParams.get("alg_index");

  if (!pageId || !alg_index) {
    return new Response(JSON.stringify({ message: "Invalid parameters" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const algoliaObject = await getObject(alg_index, pageId);
    const _refreshed_on = _.get(algoliaObject, "_refreshed_on", 0);
    var ONE_HOUR = 60 * 60 * 1000;
    const current: any = new Date();
    const previous: any = new Date(_refreshed_on);
    const cache_expired = current - previous > ONE_HOUR;
    if (!algoliaObject || !_refreshed_on || cache_expired) {
      const page = await notion.getPage(pageId);
      await saveObject(alg_index, pageId, {
        ...page,
        _refreshed_on: Date.now(),
      });
      return new Response(JSON.stringify(page), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response(JSON.stringify(algoliaObject), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error fetching blocks" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
}
