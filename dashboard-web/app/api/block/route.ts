// app/api/block/route.ts

import _ from "lodash";
import { getObject, saveObject } from "@/lib/algolia";
import { NotionCompatAPI } from "notion-compat";
import { Client } from "@notionhq/client";

const notion = new NotionCompatAPI(
  new Client({ auth: process.env.NOTION_SECRET_KEY }),
);

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const block_id: string = searchParams.get("block_id")!;

  if (block_id === "favicon.svg") {
    return new Response(JSON.stringify({ message: "Data not found!" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  const response = await fetchPage(block_id, "get");
  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function PUT(req: Request) {
  const { searchParams } = new URL(req.url);
  const block_id: string = searchParams.get("block_id")!;

  const response = await fetchPage(block_id, "update");
  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

async function fetchPage(block_id: string, action: string) {
  try {
    const alg_index = "issues";
    let recordMap = {};
    const algoliaObject = await getObject(alg_index, block_id);
    const writableObject = algoliaObject as {
      objectID?: string;
      updatedAt?: string;
      type?: string;
    };

    if (!algoliaObject || action === "update") {
      const notionObject = await notion.getPage(block_id);
      recordMap = notionObject;

      if (!algoliaObject) {
        console.log("Saving data to algolia!.........");
        await saveObject(alg_index, block_id, recordMap);
      } else {
        await saveObject(alg_index, block_id, recordMap);
        delete writableObject.objectID;
        delete writableObject.updatedAt;
        delete writableObject.type;

        if (!_.isEqual(notionObject, algoliaObject)) {
          // To Do = Create New Version with previous data "algoliaObject"
        }
      }
    } else {
      recordMap = algoliaObject;
    }

    return recordMap;
  } catch (error) {
    console.error(error);
    return {};
  }
}
