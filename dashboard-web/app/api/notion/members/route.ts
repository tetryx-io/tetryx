const { Client } = require("@notionhq/client");

const notion1 = new Client({ auth: process.env.NOTION_SECRET_KEY });

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userEmail = searchParams.get("email");

  if (!userEmail) {
    return new Response(JSON.stringify({ message: "userEmail is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const response = await notion1.users.list();
  const members = response.results;
  let result = false;
  members.map((d) => {
    if (d.person?.email === userEmail) {
      result = true;
    }
  });

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
