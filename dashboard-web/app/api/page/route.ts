import { getObject, saveObject, savePage } from "@/lib/algolia";
import { NotionCompatAPI } from "notion-compat";
import _ from "lodash";
import { Client } from "@notionhq/client";

const notion = new NotionCompatAPI(
  new Client({ auth: process.env.NOTION_SECRET_KEY }),
);

async function fetchPage(action, alg_index, root_block_id, block_id) {
  console.log(action, alg_index, block_id);
  let recordMap: any = {};
  const algoliaObject = await getObject(alg_index, block_id);
  const _refreshed_on: number = _.get(algoliaObject, "_refreshed_on", 0);
  var ONE_HOUR = 60 * 60 * 1000; /* ms */
  const current: any = new Date();
  const previous: any = new Date(_refreshed_on);
  const cache_expired = current - previous > ONE_HOUR;

  if (!algoliaObject || action === "PUT" || !_refreshed_on || cache_expired) {
    console.log("Rehydrating Algolia index. block_id=", block_id);
    recordMap = await notion.getPage(block_id);
    recordMap._refreshed_on = Date.now();
  } else {
    recordMap = algoliaObject;
  }

  const _access_count = _.get(recordMap, "_access_count", 0) + 1;
  console.log("Updating record count and saving data to algolia.", {
    block_id,
    _access_count,
  });
  await savePage(alg_index, root_block_id, block_id, {
    ...recordMap,
    _access_count,
  });

  return recordMap;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const block_id = searchParams.get("block_id");
  const alg_index = searchParams.get("alg_index");
  const root_block_id = searchParams.get("root_block_id");

  if (!block_id || !alg_index || !root_block_id) {
    return new Response(JSON.stringify({ message: "Invalid parameters" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (block_id === "favicon.svg") {
    return new Response(JSON.stringify({ message: "Data not found!" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const response = await fetchPage("GET", alg_index, root_block_id, block_id);
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error fetching blocks" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);
  const block_id = searchParams.get("block_id");
  const alg_index = searchParams.get("alg_index");
  const root_block_id = searchParams.get("root_block_id");

  if (!block_id || !alg_index || !root_block_id) {
    return new Response(JSON.stringify({ message: "Invalid parameters" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const response = await fetchPage("PUT", alg_index, root_block_id, block_id);
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error fetching blocks" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
