export const siteConfig = {
  name: "Atrium",
  company_name: "Reframe AI, Inc. d/b/a Atrium",
  url: "https://atrium.st",
  domain: "atrium.st",
  author: "Atrium",
  title: "Atrium | AI Agents at Your Finger Tips",
  description:
    "Atrium AI allows businesses to seamlessly hire on-demand AI agents build on our platform by a vibrant community of developers.",
  image: "https://atrium-store.s3.amazonaws.com/assets/new-atrium-cover.png", //Update image
  favicon: "/atrium/favicon/favicon.ico",
  manifest: "/manifest.json"
};

export type SiteConfig = typeof siteConfig;

export const cacheConfig = {
  /*
   * Notion images expire after an hour. Make sure the page is fetched again if the cache is older than an hour.
   */
  state_while_reval: 60 * 60, // 1 Hour.
  // If the page returned is older than `maxage` seconds, perform a stale-while-revalidate operation.
  maxage: 10, // Seconds
};

export type cacheConfig = typeof cacheConfig;

export const contentPageConfig = {
  DOCS: {
    root_block_id: "6dcda399752c4d618bcbe360c2d0ba54",
    path: "docs",
    algolia_index: "docs",
    page_title: `Docs | ${siteConfig?.name}`,
    TOC_orientation: "LEFT",
  },
  WIKI: {
    root_block_id: "8ef7f4611e4a4b769812167833aa83bd",
    path: "wiki",
    algolia_index: "wiki",
    page_title: `Wiki | ${siteConfig?.name}`,
    TOC_orientation: "LEFT",
  },
  USECASE: {
    root_block_id: "31b0a64a4222410e92f9b0a8095b101d",
    path: "use-case",
    algolia_index: "use-cases",
    page_title: `Use Cases | ${siteConfig?.name}`,
    TOC_orientation: "LEFT",
  },
  ISSUES: {
    root_block_id: "31b0a64a4222410e92f9b0a8095b101d",
    path: "issues",
    algolia_index: "issues",
    page_title: `Issues | ${siteConfig?.name}`,
    TOC_orientation: "NONE",
  },
};

export type contentPageConfig = typeof contentPageConfig;
