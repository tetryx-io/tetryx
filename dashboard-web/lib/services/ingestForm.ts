import axios from "axios";
import axiosApiInstance from "./request";

export const createIngestForm = async (ingestForm: any) => {
  try {
    const response = await axiosApiInstance.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/ingest-form/`,
      ingestForm,
    );
    return { status: true, message: "", data: response.data };
  } catch (error) {
    return { status: false, message: error.code };
  }
};

export const getIngestForm = async (form_id: string) => {
  try {
    const response = await axiosApiInstance.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/ingest-form/${form_id}/`,
    );
    return { status: true, message: "", data: response.data };
  } catch (error) {
    return { status: false, message: error.code };
  }
};

export const getPublishedIngestForm = async (form_id: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/ingest-form/${form_id}/published/`,
    );
    return { status: true, message: "", data: response.data };
  } catch (error) {
    return { status: false, message: error.code };
  }
};

export const updateIngestForm = async (ingestForm: any) => {
  try {
    const response = await axiosApiInstance.put(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/ingest-form/${ingestForm._id}/`,
      ingestForm,
    );
    return { status: true, message: "", data: response.data };
  } catch (error) {
    return { status: false, message: error.code };
  }
};

export const submitForm = async (form_id: string, payload: any) => {
  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/ingest-form/${form_id}/submission/`,
      payload,
    );
    return { status: true, message: "" };
  } catch (error) {
    return { status: false, message: error.code };
  }
};
