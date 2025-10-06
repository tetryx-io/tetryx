import axiosApiInstance from "@/lib/services/request";
import { Price, Feature } from "@/types/pricing";

interface PricingOptionParams {
  agent_id: string;
  id?: string;
  pricing_model?: string;
  is_default?: boolean;
  name?: string;
  description?: string;
  price_list?: Price[];
  feature_list?: Feature[];
}

export const createPricingOption = async (params: PricingOptionParams) => {
  try {
    const response = await axiosApiInstance.post(
      `/agent/agt_${params.agent_id}/product/`,
      { ...params },
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

export const deletePricingOption = async (params: PricingOptionParams) => {
  try {
    const response = await axiosApiInstance.delete(
      `/agent/agt_${params.agent_id}/product/prod_${params.id}/`,
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

export const updatePricingOption = async (params: PricingOptionParams) => {
  try {
    console.log("params", params);
    const response = await axiosApiInstance.patch(
      `/agent/agt_${params.agent_id}/product/prod_${params.id}/`,
      { ...params },
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
