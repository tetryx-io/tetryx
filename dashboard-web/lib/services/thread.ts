import axiosApiInstance from "./request";

interface UpdateThreadParams {
  thread_id: string;
  data: {
    title?: string;
    visibility?: string;
  };
}

export const updateThread = async ({ thread_id, data }: UpdateThreadParams) => {
  try {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    const res = await axiosApiInstance.patch(
      `/thread/${thread_id}/`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    return {
      status: true,
      message: "Thread updated successfully",
      data: res.data,
    };
  } catch (error) {
    return {
      status: false,
      message: error.response.data.detail,
    };
  }
};

export const deleteThread = async ({ thread_id }: { thread_id: string }) => {
  try {
    const res = await axiosApiInstance.delete(`/thread/${thread_id}/`);
    return {
      status: true,
      message: "Thread deleted successfully",
      data: res.data,
    };
  } catch (error) {
    return {
      status: false,
      message: error.response.data.detail,
    };
  }
};
