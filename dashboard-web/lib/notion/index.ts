// @ts-nocheck
import { Client } from "@notionhq/client";
import _ from "lodash";
const notion = new Client({ auth: process.env.NOTION_SECRET_KEY });

/*
 * Retrieve the page title and icon as
 */
export const getPageTitle = (page) => {
  let raw_page = _.get(page, "raw.page", {});
  const title_list = _.get(raw_page, ["properties", "title", "title"]);
  let title = _.map(title_list, (t) => t?.plain_text).join("");

  return title;
};

const getChildren = async (block_id, page_size = 50, start_cursor) => {
  try {
    let payload = {
      page_size: page_size,
      block_id: block_id,
    };
    if (start_cursor) {
      payload["start_cursor"] = start_cursor;
    }
    return await notion.blocks.children.list(payload);
  } catch (error) {
    console.log(error);
    return { results: [], has_more: false, next_cursor: null };
  }
};

export const getPageAuthors = (page) => {
  let author_map = {
    "deac8ad6-53b4-4094-aee1-fdb5cdbb68b0": {
      name: "Peter W. Njenga",
      role: "Founder & CEO",
      avatar: "https://avatars.githubusercontent.com/u/101906276?v=4",
      url: "https://github.com/peterwnjenga",
    },
    "4bef72df-f086-4114-a571-a34ec2d01ee1": {
      name: "Nicholas Ward",
      role: "Founder & COO",
      avatar:
        "https://media.licdn.com/dms/image/C5603AQFtit_qFbNbQA/profile-displayphoto-shrink_200_200/0/1657222604258?e=1699488000&v=beta&t=zajiIrJ8s6L2Zt1JPDhrsd-BqOP7CwVhujMivppDbn0",
      url: "https://www.linkedin.com/in/nick-ward-cfa-818789124/",
    },
  };

  // Return the main author for now.
  // TODO. Go through all the blocks and return all authors and editors
  let main_author = _.get(page, "raw.page.created_by");
  let authors = _.filter(author_map, (a, id) => id === main_author?.id);
  return authors;
};

const getAllChildren = async (block_id, type) => {
  try {
    let fetchNext = true;
    let start_cursor = "";
    let response = [];
    while (fetchNext) {
      const res = await getChildren(block_id, 5, start_cursor);
      response = [...response, ...res.results];
      fetchNext = res.has_more;
      start_cursor = res.next_cursor;
    }
    if (type) {
      response = response.filter((r) => r.type === type);
    }
    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getPageTreeTableOfContents = (blocks) => {
  const headings = _.filter(blocks, (block) =>
    ["heading_1", "heading_2", "heading_3", "heading_4"].includes(block.type),
  );
  const h_array = _.map(headings, (block) => {
    const _type = block["type"];
    // const text = block[_type]["rich_text"][0]["plain_text"];
    const text = _.map(
      block[_type]["rich_text"],
      (text) => text.plain_text,
    ).join(" ");

    return { type: _type, text, id: block.id };
  });

  function convertToTree(flatArray) {
    const tree = [];
    const levelRegex = /^heading_(\d+)$/;

    for (const item of flatArray) {
      const match = item.type.match(levelRegex);
      if (!match) {
        continue;
      }
      const level = parseInt(match[1]);
      const name = item.text;

      const newNode = {
        id: item.id,
        type: item.type,
        title: item.text,
        hash_link: `${item.id.replace(/-/g, "")}`,
        children: [],
      };
      let l = null;

      switch (level) {
        case 1:
          tree.push(newNode);
          break;
        case 2:
          if (tree.length === 0) {
            tree.push({ title: "*", id: "0_2", children: [] });
          }

          l = _.get(tree, [tree.length - 1, "children"], []);
          l.push(newNode);

          break;
        case 3:
          if (tree.length === 0) {
            tree.push({
              title: "*",
              id: "0_0",
              children: [{ title: "*", id: `0_0_3`, children: [] }],
            });
          }
          let i_0 = tree.length - 1;
          let i_1 = _.get(tree, [i_0, "children"], []).length - 1;

          let l = _.get(tree, [i_0, "children", i_1, "children"], []);
          l.push(newNode);
          break;
      }
    }

    return tree;
  }

  const tree = convertToTree(h_array);
  return tree;
};

const mapAllChild = async (pages) => {
  try {
    for (let i = 0; i < pages.length; i++) {
      if (pages[i].has_children) {
        pages[i]["children"] = await getAllChildren(pages[i].id, "child_page");
        await mapAllChild(pages[i]["children"]);
      }
    }
    return pages;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const mapMenuData = (items, path) => {
  return items.map((item) => {
    const title = item?.child_page?.title
      .split(" ")
      .join("-")
      .replace("/", "-");
    const id = item.id.replace(/-/g, "");
    item = Object.assign(
      {},
      {
        id: id,
        title: item?.child_page?.title || "",
        path_link: `/${path}/${title}-${id}`,
        public: true,
        children: item.children,
      },
    );
    if (item.children) {
      item.children = mapMenuData(item.children, path);
    }
    return item;
  });
};

const getChildPages = async (block_id, path) => {
  const pages = await getAllChildren(block_id, "child_page");
  const response = await mapAllChild(pages);
  const result = mapMenuData(response, path);
  return result;
};

export { getAllChildren, getChildren, getChildPages };
