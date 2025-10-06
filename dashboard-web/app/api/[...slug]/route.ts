import { NextRequest, NextResponse } from "next/server";
import axios, { AxiosRequestConfig } from "axios";
import ansis from "ansis";
import _ from "lodash";

function construct_axios_config(request: NextRequest) {
  let _headers = {};

  request.headers.forEach((value, key) => {
    _headers[key] = value;
  });

  let _cookies = request.cookies.getAll();

  // _headers = _.omit(_headers, ['host', 'content-length']);
  _headers = _.pick(_headers, [
    "authorization",
    "accept",
    "connection",
    "accept",
    "accept-encoding",
    "accept-language",
    "cookie",
    "content-type",
  ]);

  const config: AxiosRequestConfig = {
    headers: _headers,
    withCredentials: true,
  };

  return config;
}

export async function POST(request: NextRequest) {
  const base_api_url = process.env.NEXT_PUBLIC_API_BASE_URL;
  const api_url = request.nextUrl.href.replace(
    /http[s?]:\/\/.*\/api/i,
    base_api_url as string,
  );
  const config = construct_axios_config(request);

  let body: BodyInit;

  if (request.headers.get("content-type")?.includes("application/json")) {
    body = JSON.stringify(await request.json());
  } else if (
    request.headers.get("content-type")?.includes("multipart/form-data")
  ) {
    delete config?.headers?.["content-type"];
    body = await request.formData();
  } else {
    body = {} as BodyInit;
  }

  try {
    console.debug(`${ansis.green("API POST")} → ${api_url}`);
    const res = await fetch(api_url, {
      method: request.method,
      headers: config?.headers as HeadersInit,
      body: body,
    });

    let res_json = await res.json();
    console.log("res.json()", res.status, res_json);
    return NextResponse.json(res_json);
  } catch (e) {
    // TODO (PETER) Handle errors properly.
    console.error(e?.message);
    console.error(JSON.stringify(e?.response?.data, null, 4));
    return NextResponse.error();
  }
}

export async function HEAD(request: NextRequest) {
  const base_api_url = process.env.NEXT_PUBLIC_API_BASE_URL;
  const api_url = request.nextUrl.href.replace(
    /http[s?]:\/\/.*\/api/i,
    base_api_url as string,
  );
  const config = construct_axios_config(request);

  try {
    console.debug(`${ansis.green("API HEAD")} → ${api_url}`);
    let res = await axios.head(api_url, config);
    return NextResponse.json(res.data);
  } catch (e) {
    // TODO (PETER) Handle errors properly.
    console.error(e);
    return NextResponse.error();
  }
}

export async function OPTIONS(request: NextRequest) {
  const base_api_url = process.env.NEXT_PUBLIC_API_BASE_URL;
  const api_url = request.nextUrl.href.replace(
    /http[s?]:\/\/.*\/api/i,
    base_api_url as string,
  );
  const config = construct_axios_config(request);

  try {
    console.debug(`${ansis.green("API OPTIONS")} → ${api_url}`);
    let res = await axios.options(api_url, config);
    return NextResponse.json(res.data);
  } catch (e) {
    // TODO (PETER) Handle errors properly.
    console.error(e);
    return NextResponse.error();
  }
}

export async function GET(request: NextRequest) {
  const base_api_url = process.env.NEXT_PUBLIC_API_BASE_URL;
  console.log(request.nextUrl);
  const api_url = request.nextUrl.href.replace(
    /http[s?]:\/\/.*\/api/i,
    base_api_url as string,
  );
  const config = construct_axios_config(request);

  console.log("-->", api_url, base_api_url);

  try {
    console.debug(`${ansis.green("API GET")} → ${api_url}`);
    let res = await axios.get(api_url, config);
    return NextResponse.json(res.data);
  } catch (e) {
    // TODO (PETER) Handle errors properly.
    console.error(JSON.stringify(e));
    return NextResponse.error();
  }
}

export async function PUT(request: NextRequest) {
  const base_api_url = process.env.NEXT_PUBLIC_API_BASE_URL;
  const api_url = request.nextUrl.href.replace(
    /http[s?]:\/\/.*\/api/i,
    base_api_url as string,
  );
  const config = construct_axios_config(request);

  try {
    console.debug(`${ansis.green("API PUT")} → ${api_url}`);
    let res = await axios.put(api_url, config);
    return NextResponse.json(res.data);
  } catch (e) {
    // TODO (PETER) Handle errors properly.
    console.error(e);
    return NextResponse.error();
  }
}

export async function PATCH(request: NextRequest) {
  const base_api_url = process.env.NEXT_PUBLIC_API_BASE_URL;
  const api_url = request.nextUrl.href.replace(
    /http[s?]:\/\/.*\/api/i,
    base_api_url as string,
  );
  const config = construct_axios_config(request);

  try {
    console.debug(`${ansis.green("API PATCH")} → ${api_url}`);
    let res = await axios.patch(api_url, config);
    return NextResponse.json(res.data);
  } catch (e) {
    // TODO (PETER) Handle errors properly.
    console.error(e);
    return NextResponse.error();
  }
}

export async function DELETE(request: NextRequest) {
  const base_api_url = process.env.NEXT_PUBLIC_API_BASE_URL;
  const api_url = request.nextUrl.href.replace(
    /http[s?]:\/\/.*\/api/i,
    base_api_url as string,
  );
  const config = construct_axios_config(request);

  try {
    console.debug(`${ansis.green("API DELETE")} → ${api_url}`);
    let res = await axios.delete(api_url, config);
    return NextResponse.json(res.data);
  } catch (e) {
    // TODO (PETER) Handle errors properly.
    console.error(e);
    return NextResponse.error();
  }
}
