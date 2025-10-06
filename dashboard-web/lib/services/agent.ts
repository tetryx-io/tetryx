import axiosApiInstance from "@/lib/services/request";
import { AgentParams } from "@/types/agent";
import FormData from 'form-data';

export const createAgent = async (params: AgentParams = {}) => {
  try {
    const formData = new FormData();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        let formValue;
        if (value instanceof File) {
          formValue = new File([value], value.name, { type: value.type });
        } else if (typeof value === 'object') {
          formValue = JSON.stringify(value);
        } else {
          formValue = value;
        }
        formData.append(key, formValue);
      }
    });

    const response = await axiosApiInstance.post("/agent/", 
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        maxBodyLength: Infinity,
      }
    );

    if (response && response.data) {
      return {
        status: true,
        message: "Successfully created agent",
        data: response.data,
      };
    }
  } catch (error) {
    console.log("error", error);
    const errorMessage = error?.response?.data?.detail || error?.message;

    return { status: false, message: `Failed to create agent ${errorMessage}` };
  }
};

export const updateAgent = async (params: AgentParams = {}) => {
  try {
    const formData = new FormData();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        let formValue;
        if (value instanceof File) {
          formValue = new File([value], value.name, { type: value.type });
        } else if (typeof value === 'object') {
          formValue = JSON.stringify(value);
        } else {
          formValue = value;
        }
        formData.append(key, formValue);
      }
    });

    const response = await axiosApiInstance.patch(`/agent/agt_${params.id}/`, 
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        maxBodyLength: Infinity,
      }
    );

    if (response && response.data) {
      return {
        status: true,
        message: "Successfully updated agent",
        data: response.data,
      };
    }
  } catch (error) {
    console.log("error", error);
    const errorMessage = error?.response?.data?.detail || error?.message;

    return { status: false, message: `Failed to update agent ${errorMessage}` };
  }
};

export const getAgent = async ({ agent_id }) => {
  try {
    const params = {
    };

    const response = await axiosApiInstance.get(`/agent/${agent_id}/`, { params });

    if (response && response.data) {
      return { status: true, message: "run successfully", data: response.data };
    }
  } catch (error) {
    return { status: false, message: `Failed to get agent ${error?.code}`, error: error, data: null };
  }
};

export const searchAgent = async ({
  q,
  installed,
  limit = 24,
  scope = "public",
}: {
  q?: string;
  scope?: string;
  installed?: boolean;
  limit?: number;
  sc?: boolean;
}) => {
  try {
    const params: any = {
      q,
      scope,
      installed,
      limit
    };
    console.log("Search Agent params", params);
    const response = await axiosApiInstance.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/agent/search/`,
      params,
    );

    if (response && response.data) {
      return { status: true, message: "run successfully", data: response.data };
    }
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: `Invalid search params ${error?.code}`,
      error: error,
    };
  }
};

export const installAgent = async ({ agent_id, product_id }: { agent_id: string; product_id?: string }) => {
  try {
    const response = await axiosApiInstance.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/agent/agt_${agent_id}/installation/`, 
      { product_id }
    );

    if (response && response.data) {
      return { status: true, message: "run successfully", data: response.data };
    }
  } catch (error) {
    return { status: false, message: `Invalid prompt ${error?.code}` };
  }
};

export const deployAgent = async ({ agent_id }) => {
  try {
    console.log(
      "agent_id",
      agent_id,
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/agent/deploy/agt_${agent_id}`,
    );
    const response = await axiosApiInstance.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/agent/deploy/agt_${agent_id}`,
    );

    if (response && response.data) {
      return { status: true, message: "run successfully", data: response.data };
    }
  } catch (error) {
    return { status: false, message: `Invalid prompt ${error?.code}` };
  }
};

export const uninstallAgent = async ({ agent_id, install_id }: { agent_id: string, install_id: string }) => {
  try {
    const response = await axiosApiInstance.delete(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/agent/agt_${agent_id}/installation/ins_${install_id}`,
    );

    if (response && response.data) {
      return { status: true, message: "run successfully", data: response.data };
    }
  } catch (error) {
    return { status: false, message: `Invalid prompt ${error?.code}` };
  }
};

export const updateAgentInstall = async ({ agent_id, install_id, product_id }: { agent_id: string, install_id: string, product_id: string }) => {
  try {
    const response = await axiosApiInstance.patch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/agent/agt_${agent_id}/installation/ins_${install_id}`,
      { product_id }
    );

    if (response && response.data) {
      return { status: true, message: "run successfully", data: response.data };
    }
  } catch (error) {
    return { status: false, message: `Invalid prompt ${error?.code}` };
  }
};

export const uploadAgentBanner = async ({ agent_id, files }: { agent_id: string, files: File[] }) => {
  try {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('file_list', file);
    });

    const response = await axiosApiInstance.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/agent/${agent_id}/banner/`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        maxBodyLength: Infinity,
      }
    );

    if (response?.data?.message === "Banners added successfully") {
      return {
        status: true,
        message: "Successfully uploaded banners",
        data: response.data.banners
      };
    }

    return {
      status: false,
      message: "Failed to upload banners"
    };
  } catch (error) {
    console.error('Error uploading banners:', error);
    const errorMessage = error?.response?.data?.detail || error?.message;
    return { 
      status: false, 
      message: `Failed to upload banners: ${errorMessage}` 
    };
  }
};

export const deleteAgentBanner = async ({ agent_id, file_id }: { agent_id: string, file_id: string }) => {
  try {
    const response = await axiosApiInstance.delete(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/agent/${agent_id}/banner/${file_id}`
    );

    if (response && response.data) {
      return {
        status: true,
        message: "Successfully deleted banner",
        data: response.data,
      };
    }
  } catch (error) {
    console.error('Error deleting banner:', error);
    const errorMessage = error?.response?.data?.detail || error?.message;
    return { 
      status: false, 
      message: `Failed to delete banner: ${errorMessage}` 
    };
  }
};

export const awakeAgent = async ({ agent_id }: { agent_id: string }) => {
  try {
    const response = await axiosApiInstance.post(`/agent/${agent_id}/runtime/unhibernate/`);
    return response;
  } catch (error) {
    return { status: false, message: `Invalid prompt ${error?.code}` };
  }
};

