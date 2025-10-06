import axiosApiInstance from "@/lib/services/request";
import { AgentParams } from "@/types/agent";

export const switchWorkspace = async (workspace_id: string) => {
  try {
    const response = await axiosApiInstance.post(`/workspace/switch/${workspace_id}/`);

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

export const setDevMode = async (enabled: boolean ) => {
  try {
    const response = await axiosApiInstance.patch(`/workspace/dev-mode/enable/`, {
      is_dev_mode: enabled
    });

    if (response && response.data) {
      return {
        status: true,
        message: "Successfully set dev mode",
        data: response.data,
      };
    }
  } catch (error) {
    console.log("error", error);
    const errorMessage = error?.response?.data?.detail || error?.message;

    return { status: false, message: `Failed to set dev mode ${errorMessage}` };
  }
};

