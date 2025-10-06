import axios from "axios";

export const getNotionContentById = async (contentId: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/public/notion/page?pageId=${contentId}&alg_index=dataset_contents`,
    );
    return response.data;
  } catch (_) {
    return null;
  }
};
