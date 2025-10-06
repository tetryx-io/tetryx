import { NotionCompatAPI } from "notion-compat";
import { Client } from "@notionhq/client";

const notion = new NotionCompatAPI(
  new Client({ auth: process.env.NOTION_SECRET_KEY }),
);

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const block_id = searchParams.get("block_id");

  if (!block_id) {
    return new Response(JSON.stringify({ message: "block_id is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const page = await notion.getPage(block_id);

  return new Response(JSON.stringify(page), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
