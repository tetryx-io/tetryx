import axios from "axios";
import _ from "lodash";

export const fetchNotionPageData = async ({
  page_url,
  algolia_index,
  root_block_id,
}) => {
  const page_id = _.last(page_url.split("-"));
  const api_url = `${process.env.NEXT_PUBLIC_APP_URL}/api/page?block_id=${page_id}&alg_index=${algolia_index}&root_block_id=${root_block_id}`;

  try {
    const { data: page, status, ...rest } = await axios.get(api_url);
    if (status === 200 && page) {
      return { page };
    } else {
      return { error: "Unable to fetch page" };
    }
  } catch (err) {
    console.error(err);
    return { error: "Unable to fetch page" };
  }
};

export const fetchNotionTreeMenu = async ({
  page_url,
  algolia_index,
  root_block_id,
}) => {
  const page_id = _.last(page_url.split("-"));
  const api_url = `${process.env.NEXT_PUBLIC_APP_URL}/api/page?block_id${page_id}&alg_index=${algolia_index}&root_block_id=${root_block_id}`;

  try {
    const { data: page, status, ...rest } = await axios.get(api_url);
    if (status === 200 && page) {
      return { page };
    } else {
      return { error: "Unable to fetch page" };
    }
  } catch (err) {
    console.error(err);
    return { error: "Unable to fetch page" };
  }
};
