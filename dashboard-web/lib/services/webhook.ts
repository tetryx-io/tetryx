import axiosApiInstance from "./request";

interface CreateWebhookParams {
  agent_id: string;
  installation_id: string;
  data: any;
}

export const createWebhook = async ({
  agent_id,
  installation_id,
  data,
}: CreateWebhookParams) => {
  try {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    const res = await axiosApiInstance.post(
      `/agent/${agent_id}/installation/${installation_id}/hook/`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    return {
      status: true,
      message: res.data.message,
      data: res.data,
    };
  } catch (error) {
    return {
      status: false,
      message: error.response.data.detail,
    };
  }
};

export const updateWebhook = async ({
  agent_id,
  installation_id,
  webhook_id,
  data,
}) => {
  try {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    const res = await axiosApiInstance.patch(
      `/agent/${agent_id}/installation/${installation_id}/hook/${webhook_id}/`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    return {
      status: true,
      message: res.data.message,
      data: res.data,
    };
  } catch (error) {
    return {
      status: false,
      message: error.response.data.detail,
    };
  }
};

export const deleteWebhook = async ({
  agent_id,
  installation_id,
  webhook_id,
}) => {
  try {
    const res = await axiosApiInstance.delete(
      `/agent/${agent_id}/installation/${installation_id}/hook/${webhook_id}/`,
    );
    return {
      status: true,
      message: res.data.message,
    };
  } catch (error) {
    return {
      status: false,
      message: error.response.data.detail,
    };
  }
};
