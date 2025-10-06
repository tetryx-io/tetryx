import { saveObject } from "@/lib/algolia";

export async function GET(request: Request) {
  const comments = [];
  return new Response(JSON.stringify(comments), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  const payload = await request.json();

  if (payload.comment && payload.blockId && payload.pageId) {
    const response = await saveObject("comments", null, payload);
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response("Invalid payload!", {
      status: 400,
      headers: { "Content-Type": "text/plain" },
    });
  }
}
