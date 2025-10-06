import { getChildPages, getPageTitle } from "@/lib/notion";
import memCache from "memory-cache";
import { NotionCompatAPI } from "notion-compat";
import { saveMenu, getObject } from "@/lib/algolia";
import { Client } from "@notionhq/client";

const notion = new NotionCompatAPI(
  new Client({ auth: process.env.NOTION_SECRET_KEY }),
);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") || "";

  const response = await getObject("menus", id);
  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function PUT(request: Request) {
  const { id, path } = await request.json();

  let [parent_page, response] = await Promise.all([
    notion.getPage(id),
    getChildPages(id, path),
  ]);

  const page_title = getPageTitle(parent_page);
  await saveMenu("menus", id, response, page_title);
  memCache.del(id);

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
