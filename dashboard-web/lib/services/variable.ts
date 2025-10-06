import axiosApiInstance from "@/lib/services/request";

interface UpdateVariableParams {
  agent_id: string;
  installation_id: string;
  variable_id: string;
  key: string;
  value: string | object;
  comment?: string;
  is_secret?: boolean;
}

interface DeleteVariableParams {
  agent_id: string;
  installation_id: string;
  variable_id: string;
}

interface CreateVariableParams {
  agent_id: string;
  installation_id: string;
  key: string;
  value: string | object;
  value_type: 'string' | 'url' | 'json';
  comment?: string;
  is_secret: boolean;
}

export const createVariable = async ({
  agent_id,
  installation_id,
  key,
  value,
  value_type,
  comment,
  is_secret
}: CreateVariableParams) => {
  try {
    const formData = new FormData();
    formData.append('key', key);
    formData.append('value', typeof value === 'object' ? JSON.stringify(value) : value);
    formData.append('value_type', value_type);
    if (comment) formData.append('comment', comment);
    formData.append('is_secret', String(is_secret));

    const response = await axiosApiInstance.post(
      `/agent/agt_${agent_id}/installation/ins_${installation_id}/variable/`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );

    if (response && response.data) {
      return {
        status: true,
        message: "Variable created successfully",
        data: response.data,
      };
    }
  } catch (error) {
    console.error("Error creating variable:", error);
    const errorMessage = error?.response?.data?.detail || error?.message;

    return { 
      status: false, 
      message: `Failed to create variable: ${errorMessage}` 
    };
  }
};

export const updateVariable = async ({
  agent_id,
  installation_id,
  variable_id,
  key,
  value,
  comment,
  is_secret
}: UpdateVariableParams) => {
  try {
    const formData = new FormData();
    formData.append('key', key);
    formData.append('value', typeof value === 'object' ? JSON.stringify(value) : value);
    if (comment) formData.append('comment', comment);
    if (is_secret !== undefined) formData.append('is_secret', String(is_secret));

    const response = await axiosApiInstance.patch(
      `/agent/agt_${agent_id}/installation/ins_${installation_id}/variable/${variable_id}/`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );

    if (response && response.data) {
      return {
        status: true,
        message: "Variable updated successfully",
        data: response.data,
      };
    }
  } catch (error) {
    console.error("Error updating variable:", error);
    const errorMessage = error?.response?.data?.detail || error?.message;

    return { 
      status: false, 
      message: `Failed to update variable: ${errorMessage}` 
    };
  }
};

export const deleteVariable = async ({
  agent_id,
  installation_id,
  variable_id,
}: DeleteVariableParams) => {
  try {
    const response = await axiosApiInstance.delete(
      `/agent/agt_${agent_id}/installation/ins_${installation_id}/variable/${variable_id}/`
    );

    if (response && response.data) {
      return {
        status: true,
        message: "Variable deleted successfully",
        data: response.data,
      };
    }
  } catch (error) {
    console.error("Error deleting variable:", error);
    const errorMessage = error?.response?.data?.detail || error?.message;

    return { 
      status: false, 
      message: `Failed to delete variable: ${errorMessage}` 
    };
  }
}; 