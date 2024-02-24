import { NextResponse } from 'next/server';
import { getJson } from "serpapi";

export async function GET(req: Request) {
  if (req.method !== "GET") {
    return NextResponse.json({ message: "Method not allowed" });
  }

  const apiKey = "76ac983b59635750e7679dab7fad4ae08a1088ccd1c71b3cb17cb7a756248219";
  const authorId = "Yd-UKrsAAAAJ";

  const params = {
    author_id: authorId,
    api_key: apiKey,
    hl: "en",
    sort: "pubdate",
    num: "5",
  };

  try {
    const response = await getJson("google_scholar_author", params);
    let jsonData = NextResponse.json(response);

    console.log(response);

    return jsonData;

  } catch (error) {
    console.error("Error fetching Google Scholar author data:", error);
    NextResponse.json({ error: "Internal server error" });
  }
}
