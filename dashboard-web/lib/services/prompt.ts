import axiosApiInstance from "@/lib/services/request";
import toast from "react-hot-toast";


export const deleteFile = async (file_id: string) => {
  try {
    await axiosApiInstance.delete(`/file/upload/fil_${file_id}`);
    return { status: true, message: "" };
  } catch (error) {
    toast.error(error);
    return { status: false, message: `Invalid prompt! ${error?.code}` };
  }
};

export const uploadFile = async (
  files: File[], 
  thread_id?: string, 
  agent_installation_id?: string, 
  agent_id?: string,
  onUploadProgress?: (fileName: string, progress: number) => void
) => {
  try {
    const formData = new FormData();
    // Append each file to the FormData
    files.forEach((file) => {
      formData.append("files", file);
    });

    // Conditionally add thread_id to FormData if provided
    if (thread_id) {
      formData.append("thread_id", `trd_${thread_id.replace(/^trd_/, '')}`);
    }

    // Conditionally add agent_installation_id to FormData if provided
    if (agent_installation_id) {
      formData.append("agent_installation_id", `ins_${agent_installation_id.replace(/^ins_/, '')}`);
    }

    if (agent_id) {
      formData.append("agent_id", `agt_${agent_id.replace(/^agt_/, '')}`);
    }

    const response = await axiosApiInstance.post(`/file/upload/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        if (onUploadProgress && progressEvent.total) {
          const progress = (progressEvent.loaded / progressEvent.total) * 100;
          // Update progress for all files
          files.forEach((file) => {
            onUploadProgress(file.name, progress);
          });
        }
      },
    });

    if (response?.data) {
      return { 
        status: true, 
        message: "Files uploaded successfully", 
        data: response.data  // Array of file representation objects
      };
    }
    
    return { status: false, message: "Upload failed", data: null };
  } catch (error) {
    toast.error("File upload failed");
    return { 
      status: false, 
      message: `Upload failed: ${error?.code}`,
      data: null 
    };
  }
};

export const runPrompt = async (payload: any) => {
  try {
    await axiosApiInstance.post("/prompt/run/", payload);
    return { status: true, message: "" };
  } catch (error) {
    return { status: false, message: `Invalid prompt! ${error?.code}` };
  }
};


interface TriggerPromptParams {
  payload?: any;
  fileIdsArr?: string[];
  thread_id?: string;
  agent_id: string;
}

export const triggerPrompt = async ({
  payload,
  fileIdsArr,
  thread_id,
  agent_id,
}: TriggerPromptParams) => {
  console.log("triggerPrompt", agent_id);
  try {
    const params: any = {
      prompt_json: payload,
      prompt_version: "v2.0",
      agent_id: `agt_${agent_id.replace(/^agt_/, '')}`
    };

    if (thread_id) {
      params.thread_id = `trd_${thread_id.replace(/^trd_/, '')}`;
    }

    if (fileIdsArr?.length) {
      params.files = fileIdsArr;
    }
    const response = await axiosApiInstance.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/prompt/trigger/`,
      params,
    );

    if (response && response.data) {
      return { status: true, message: "run successfully", data: response.data };
    }
  } catch (error) {
    console.log(error, "error from an api");
    return { status: false, message: `Invalid prompt ${error?.code}` };
  }
};

export const runCurrentPrompt = async (id, workspaceId) => {
  const params: any = {
    run: "CURRENT",
    prompt_id: `pmt_${id}`,
    workspace_id: `wsp_${workspaceId}`,
  };
  const response = await axiosApiInstance.post(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/prompt/trigger/`,
    params,
  );
  console.log(response, "response");
};

export const promptSuggetion = async (searchItem: string) => {
  try {
    const body: any = {
      __index: ["ORG-NAME"],
      search: searchItem ? searchItem : "",
      top: 5,
      select: "id,name,logo_url",
    };

    const response = await axiosApiInstance.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/entity/suggest/`,
      body,
    );

    if (response && response.data) {
      return {
        status: true,
        message: "suggetion run successfully",
        data: response.data,
      };
    }
  } catch (error) {
    console.log(error, "error from an api");
    return { status: false, message: `Invalid suggetion ${error?.code}` };
  }
};

export const cloneDataframe = async (payload: any, dataframe_id: string) => {
  try {
    const response = await axiosApiInstance.post(
      `/dataframe/${dataframe_id}/clone/`,
      payload,
    );
    if (response?.data?.dataframe_id) {
      return {
        status: true,
        message: "Dataframe cloned successfully",
        data: response.data,
      };
    } else {
      return { status: false, message: "Process failed!", data: null };
    }
  } catch (error) {
    console.log(error);
    return { status: false, message: "Process failed!", data: null };
  }
};

export const deleteDataframe = async (dataframeId: string) => {
  try {
    const response = await axiosApiInstance.delete(
      `/dataframe/${dataframeId}/delete/`,
    );
    return response.data;
  } catch (error) {
    return { status: false };
  }
};

export const publishDataframe = async (payload: any, dataframe_id: string) => {
  try {
    const response = await axiosApiInstance.post(
      `/dataframe/${dataframe_id}/publish/`,
      payload,
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return "error";
  }
};
