import axiosApiInstance from "./request";

interface CreateScheduleParams {
  agent_id: string;
  installation_id: string;
  data: any;
}

export const createSchedule = async ({
  agent_id,
  installation_id,
  data,
}: CreateScheduleParams) => {
  try {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    const res = await axiosApiInstance.post(
      `/agent/${agent_id}/installation/${installation_id}/cron-job/`,
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



export const updateSchedule = async ({
  agent_id,
  installation_id,
  schedule_id,
  data,
}) => {
  try {
    const formData = new FormData();  
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    const res = await axiosApiInstance.patch(
      `/agent/${agent_id}/installation/${installation_id}/cron-job/${schedule_id}/`,
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

export const deleteSchedule = async ({
  agent_id,
  installation_id,
  schedule_id,
}) => {
  try {
    const res = await axiosApiInstance.delete(
      `/agent/${agent_id}/installation/${installation_id}/cron-job/${schedule_id}/`,
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
