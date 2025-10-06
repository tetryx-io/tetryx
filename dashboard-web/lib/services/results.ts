import axios from "axios";

export const getResults = async (id) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/entity/org/?id=${id}`,
    );
    return res.data;
  } catch (e) {}
};
