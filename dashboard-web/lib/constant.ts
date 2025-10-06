// @ts-nocheck

export const wikiPage = {
  block_id: "8ef7f4611e4a4b769812167833aa83bd",
  path: "/wiki",
  baseMenu: {
    id: "8ef7f4611e4a4b769812167833aa83bd",
    name: "Wiki | Reframe",
    link: "/wiki",
    public: true,
    children: [],
  },
};

export const DocsPage = {
  block_id: "51e15122d8894a7e8cfa91488957649a",
  path: "/docs",
  baseMenu: {
    id: "51e15122d8894a7e8cfa91488957649a",
    name: "Docs | Reframe",
    link: "/docs",
    public: true,
    children: [],
  },
};

export const UseCasePage = {
  block_id: "31b0a64a4222410e92f9b0a8095b101d",
  path: "/use-case/",
  baseMenu: {
    id: "31b0a64a4222410e92f9b0a8095b101d",
    name: "Use Cases | Reframe",
    link: "/use-case",
    public: true,
    children: [],
  },
};

export const AgentRuntimeStatus = {
  HIBERNATED: "HIBERNATED",
  HIBERNATING: "HIBERNATING",
  ERROR: "ERROR",
  WAKING: "WAKING",
  AWAKE: "AWAKE",
};

export const cronJobs = [
  { label: "Every minute", value: "* * * * *" },
  { label: "Every 1 minute", value: "*/1 * * * *" },
  { label: "Every 2 minutes", value: "*/2 * * * *" },
  { label: "Every uneven minute", value: "1-59/2 * * * *" },
  { label: "Every 3 minutes", value: "*/3 * * * *" },
  { label: "Every 4 minutes", value: "*/4 * * * *" },
  { label: "Every 5 minutes", value: "*/5 * * * *" },
  { label: "Every 6 minutes", value: "*/6 * * * *" },
  { label: "Every 10 minutes", value: "*/10 * * * *" },
  { label: "Every 15 minutes", value: "*/15 * * * *" },
  { label: "Every 20 minutes", value: "*/20 * * * *" },
  { label: "Every 30 minutes", value: "*/30 * * * *" },
  { label: "Every hour at 30 minutes", value: "30 * * * *" },
  { label: "Every hour", value: "0 * * * *" },
  { label: "Every 2 hours", value: "0 */2 * * *" },
  { label: "Every 3 hours", value: "0 */3 * * *" },
  { label: "Every 4 hours", value: "0 */4 * * *" },
  { label: "Every 6 hours", value: "0 */6 * * *" },
  { label: "Every 8 hours", value: "0 */8 * * *" },
  { label: "Every 12 hours", value: "0 */12 * * *" },
  { label: "Hour range (between 9 AM and 5 PM)", value: "0 9-17 * * *" },
  { label: "Every day", value: "0 0 * * *" },
  { label: "Every day at 1 AM", value: "0 1 * * *" },
  { label: "Every day at 2 AM", value: "0 2 * * *" },
  { label: "Every day at 8 AM", value: "0 8 * * *" },
  { label: "Every Sunday", value: "0 0 * * 0" },
  { label: "Every Monday", value: "0 0 * * 1" },
  { label: "Every Tuesday", value: "0 0 * * 2" },
  { label: "Every Wednesday", value: "0 0 * * 3" },
  { label: "Every Thursday", value: "0 0 * * 4" },
  { label: "Every Friday", value: "0 0 * * 5" },
  { label: "Every Saturday", value: "0 0 * * 6" },
  { label: "Every weekday", value: "0 0 * * 1-5" },
  { label: "Every weekend", value: "0 0 * * 6,0" },
  { label: "Every 7 days", value: "0 0 */7 * *" },
  { label: "Every week", value: "0 0 * * 0" },
  { label: "Every month", value: "0 0 1 * *" },
  { label: "Every other month", value: "0 0 1 */2 *" },
  { label: "Every quarter", value: "0 0 1 */3 *" },
  { label: "Every 6 months", value: "0 0 1 */6 *" },
  { label: "Every year", value: "0 0 1 1 *" },
];
