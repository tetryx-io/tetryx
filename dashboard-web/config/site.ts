export const siteConfig = {
  name: "Tetryx",
  company_name: "Tetryx",
  url: "https://tetryx.io",
  domain: "tetryx.io",
  author: "Tetryx",
  title: "Tetryx | Open Space & Autonomous Vehicle Stack",
  description:
    "Tetryx is the open source modular stack that enables defense, aerospace, and space companies to rapidly build and support hardware components, vehicles, and autonomous systems. This dashboard provides centralized management for cache operations and system monitoring.",
  image: "https://tetryx.io/images/tetryx-cover.png", //Update image
  favicon: "/favicon.ico",
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
