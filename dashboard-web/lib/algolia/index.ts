import algoliasearch from "algoliasearch";
import memCache from "memory-cache";
import { DocsPage, wikiPage } from "@/lib/constant";
import _ from "lodash";

const serverAppId = process.env.ALGOLIA_APP_ID || "";
const serverApiKey = process.env.ALGOLIA_SERVER_API_KEY || "";
const clientAppId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || "";
const clientApiKey = process.env.NEXT_PUBLIC_ALGOLIA_CLIENT_API_KEY || "";

export const algoliaServer = algoliasearch(serverAppId, serverApiKey);
export const algoliaClient = algoliasearch(clientAppId, clientApiKey);

export const savePage = async (index, root_block_id, id, data) => {
  try {
    const serverIndex = algoliaServer.initIndex(index);
    const parent_id = _.get(data, "raw.page.parent.page_id", "").replace(
      /-/g,
      "",
    );
    console.log(parent_id, root_block_id);
    if (parent_id !== root_block_id) {
      throw new Error("Root page must match algolia index");
    }
    const result = await serverIndex.saveObject(
      {
        ...data,
        objectID: id,
        _created_on: Date.parse(_.get(data, "raw.page.created_time")),
        _updated_on: Date.parse(_.get(data, "raw.page.last_edited_time")),
      },
      { autoGenerateObjectIDIfNotExist: true },
    );
    return result;
  } catch (error) {
    console.log("Algolia Error: saveObject", error);
    throw error;
  }
};

export const saveObject = async (index, id, data) => {
  try {
    const serverIndex = algoliaServer.initIndex(index);
    const result = await serverIndex.saveObject(
      {
        ...data,
        objectID: id,
        _created_on: Date.parse(_.get(data, "raw.page.created_time")),
        _updated_on: Date.parse(_.get(data, "raw.page.last_edited_time")),
      },
      { autoGenerateObjectIDIfNotExist: true },
    );
    return result;
  } catch (error) {
    console.log("Algolia Error: saveObject", error);
    return null;
  }
};

export const saveMenu = async (index, id, data, page_title) => {
  try {
    const serverIndex = algoliaServer.initIndex(index);
    const result = await serverIndex.saveObject({
      menus: [...data],
      objectID: id,
      updatedAt: Date.now(),
      title: page_title,
    });
    return result;
  } catch (error) {
    console.log("Algolia Error: saveObject", error);
    return null;
  }
};

export const getObject = async (index, id) => {
  try {
    const clientIndex = algoliaClient.initIndex(index);
    const result = await clientIndex.getObject(id);
    return result;
  } catch (error) {
    console.log("Algolia Error: getObject", error);
    return null;
  }
};

export const getSorted = async ({ index, page_size, page }) => {
  try {
    const replicaIndex = algoliaClient.initIndex(index);
    const result = await replicaIndex
      .search("", { hitsPerPage: page_size, page })
      .then((x) => {
        return x;
      });

    return result;
  } catch (error) {
    console.log("Algolia Error: getObject", error);
    return null;
  }
};

export const getFilterdObjects = async (index, key, value) => {
  try {
    const clientIndex = algoliaClient.initIndex(index);
    const result = await clientIndex.search("", { filters: `${key}:${value}` });
    return result.hits;
  } catch (error) {
    console.log(error);
  }
};

export const getObjects = async (index) => {
  try {
    const clientIndex = algoliaClient.initIndex(index);
    const result = await clientIndex.search("");
    return result;
  } catch (error) {
    console.log("Algolia Error: getObjects", error);
    return null;
  }
};

export const getNavMenu = async (pageName) => {
  const wikiBaseMenu = { ...wikiPage.baseMenu, children: [] };
  const nnextBaseMenu = { ...DocsPage.baseMenu, children: [] };
  const pages = { DocsPage: DocsPage, wikiPage: wikiPage };
  const rootId = pages[pageName].baseMenu.id;
  let menu = memCache.get(rootId);
  if (menu) {
    return menu;
  } else {
    let newMenu: any = await getObject("menus", rootId);
    if (newMenu) {
      delete newMenu.objectID;
      const newMenuData = Object.values(newMenu);
      pages[pageName].baseMenu.children = newMenuData;
      let updatedMenu;
      if (pageName === "DocsPage") {
        updatedMenu = [pages[pageName].baseMenu, wikiBaseMenu];
      }
      if (pageName === "wikiPage") {
        updatedMenu = [pages[pageName].baseMenu, nnextBaseMenu];
      }
      memCache.put(rootId, updatedMenu);
      return updatedMenu;
    } else {
      return pages[pageName].baseMenu;
    }
  }
};

export const searchObjects = async (index: string, query: string) => {
  try {
    const clientIndex = algoliaClient.initIndex(index);
    const result = await clientIndex.search(query);
    return result.hits;
  } catch (error) {
    console.log(error);
    return [];
  }
};
