import { getFilterdObjects } from "@/lib/algolia";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const pageId = searchParams.get("pageId");

  if (!pageId) {
    return new Response(JSON.stringify({ message: "pageId is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const response = await getFilterdObjects("comments", "pageId", pageId);

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
