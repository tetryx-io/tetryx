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

export const uploadFile = async (files: File[]) => {
  try {
    const formData = new FormData();
    
    // Append each file to the FormData
    files.forEach((file) => {
      formData.append("files", file);
    });

    const response = await axiosApiInstance.post(`/file/upload/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
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