import axiosApiInstance from "./request";

export const hubspotPostAuth = async (payload: any) => {
  try {
    const response = await axiosApiInstance.post(
      "/hubspot/post-auth/",
      payload,
    );
    return { status: true, message: "App installed successfully" };
  } catch (_) {
    return { status: false, message: "Instalation failed. Please try again!" };
  }
};
