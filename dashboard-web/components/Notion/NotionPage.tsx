import React, { useEffect, useState } from "react";
import { Client } from '@notionhq/client'
import { NotionCompatAPI } from "notion-compat";
import { NotionRenderer } from "react-notion-x";

const notion = new NotionCompatAPI(
  new Client({ auth: process.env.NEXT_PUBLIC_NOTION_SECRET_KEY })
);

const NotionPage = ({pageId}) => {
  const [page, setPage] = useState<any>(null);

  useEffect(() => {
    getPage()
  }, [pageId])

  const getPage = async () => {
    try {
      const page = await notion.getPage(pageId);
      setPage(page)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="notion-content">
      {page ? <NotionRenderer recordMap={page} /> : <h1>No Content</h1>}
    </div>
  );
};

export default NotionPage;
