import _ from "lodash";
import slugify from "slugify";
import { Agent } from "@/types/agent";

export function get_page_title(blocks) {
  const response = { title: "", page_icon: "🎯", id: "" };
  try {
    let { block } = blocks;
    let block_values = _.map(block, (elem, idx) => elem["value"]);
    let title = _.find(block_values, { type: "page", parent_table: "space" });
    response.title = title?.properties?.title[0][0] || "";
    response.page_icon = title?.format?.page_icon || "🎯";
    response.id = title?.id || "";
    return response;
  } catch (error) {
    console.log("Page title error", error);
    return response;
  }
}

export function getTimeDifference(pastTime) {
  try {
    if (!pastTime) pastTime = Date.now();
    const currentTime = Date.now();
    const milliseconds = currentTime - pastTime;
    const seconds = Math.round(milliseconds / 1000);
    const minutes = Math.round(seconds / 60);
    const hour = Math.round(minutes / 60);

    return {
      milliseconds: milliseconds,
      seconds: seconds,
      minutes: minutes,
      hour: hour,
    };
  } catch (error) {
    return {};
  }
}

export const getDocType = (page) => {
  let type = "";
  try {
    const docs = {
      "51e15122-d889-4a7e-8cfa-91488957649a": "docs",
      "8ef7f461-1e4a-4b76-9812-167833aa83bd": "wiki",
    };

    let pageId = page.raw.page.id;
    let hasParent = true;

    while (hasParent) {
      const block = page.block[pageId];
      pageId = block?.value?.parent_id;
      if (!pageId) {
        type = docs[block?.value?.id];
        hasParent = false;
      }
    }
  } catch (error) {
    console.log(error);
  }
  return type;
};

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const getTimeDifferenceString = (dateString: string): string => {
  const currentDate = new Date();
  const pastDate = new Date(dateString);

  const timeDifference = currentDate.getTime() - pastDate.getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (seconds < 60) {
    return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
  } else if (minutes < 60) {
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else if (hours < 24) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (days < 30) {
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (months < 12) {
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  } else {
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  }
};

export const formatNumberWithCommas = (num: number): string => {
  const numberString = num.toString();
  return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const truncateString = (str: string | any, num: number) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};

export const CHECK_ARRAY_IS_EMPTY_OR_NOT = (arr: Array<any>): boolean => {
  if (arr && arr.length > 0) {
    return true;
  } else {
    return false;
  }
};

export const CHECK_THREAD_VISIBILITY = (visibility: string) => {
  let givenVisibility: Array<{
    label: string;
    value: string;
    color: string;
    isActive?: boolean;
  }> = [];
  if (visibility === "WORKSPACE") {
    givenVisibility = [
      { label: `Only you`, value: "USER", color: "#525252" },
      {
        label: "Workspace members only",
        value: "WORKSPACE",
        color: "#525252",
        isActive: true,
      },
      { label: "Anyone", value: "PUBLIC", color: "#525252" },
    ];
  } else if (visibility === "USER") {
    givenVisibility = [
      { label: `Only you`, value: "USER", color: "#525252", isActive: true },
      { label: "Workspace members only", value: "WORKSPACE", color: "#525252" },
      { label: "Anyone", value: "PUBLIC", color: "#525252" },
    ];
  } else {
    givenVisibility = [
      { label: "Only you", value: "USER", color: "#525252" },
      { label: "Workspace members only", value: "WORKSPACE", color: "#525252" },
      { label: "Anyone", value: "PUBLIC", color: "#525252", isActive: true },
    ];
  }
  return givenVisibility;
};

export const CHECK_PROMPT_DATA_IS_EMPTY_OR_NOT = (promptData) => {
  if (
    promptData &&
    promptData?.length &&
    promptData[0]?.children[0]?.text !== ""
  ) {
    return true;
  } else {
    return false;
  }
};


export const HOME_ROUTE = "/studio";

export const __agent_url = (agent: Agent) => {
  return `/agent/${slugify(agent?.name?.replace(/[^a-zA-Z0-9\s]/g, "") || "", { replacement: "-", lower: true, strict: true })}--${agent?.id}`;
};

export const __agent_name_url = (agent: Agent) => {
  return `${slugify(agent?.name?.replace(/[^a-zA-Z0-9\s]/g, "") || "", { replacement: "-", lower: true, strict: true })}--${agent?.id}`;
};

export const formatPrice = (cents: number, currency: string = 'usd', interval?: string, intervalCount: number = 1) => {
  const amount = (cents / 100).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  
  const currencyStr = currency.toLowerCase() === 'usd' ? '$' : currency;
  const price = `${currencyStr}${amount}`;
  
  if (!interval) return price;
  
  const period = intervalCount === 1 
    ? interval 
    : `${intervalCount} ${interval}s`;
    
  return `${price}/${period}`;
};

export const formatId = (id: string, prefix: string): string => {
  return id.startsWith(`${prefix}_`) ? id : `${prefix}_${id}`;
};
