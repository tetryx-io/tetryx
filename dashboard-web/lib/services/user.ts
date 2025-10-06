import axiosApiInstance from "@/lib/services/request";
import { formatId } from "@/lib/utils";

export const updateUserProfile = async (userId: string, data) => {
  return await axiosApiInstance.patch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/`,
    data,
  );
};

export const updateWorspaceProfile = async (data) => {
  return await axiosApiInstance.patch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/workspace/`,
    data,
  );
};

export const inviteUsersByWorkspace = async (
  data: Array<{ email: string; role: string }>,
) => {
  try {
    const response = await axiosApiInstance.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/workspace/invite/`,
      data,
    );

    if (response && response.data) {
      return {
        status: true,
        message: "Invitations sent successfully",
        data: response.data,
      };
    }
  } catch (error) {
    console.log("error", error);
    const errorMessage = error?.response?.data?.detail || error?.message;

    return { status: false, message: errorMessage || "Failed to send invitations" };
  }
};

export const userRoleChange = async (data: {
  user_id: string;
  new_role: string;
}) => {
  return await axiosApiInstance.post(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/change-role/`,
    data,
  );
};

type UserRemovalData = {
  id: string;
  uid?: string;
};

export const userToRemove = async (data: UserRemovalData) => {
  return await axiosApiInstance.delete(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/workspace/user/`,
    { data }
  );
};
export const resendInviteToUser = async (data) => {
  return await axiosApiInstance.post(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/workspace/resend-invite/`,
    data,
  );
};

/**
 * Updates the user profile using form data instead of JSON payload.
 * This function is used to update the user's image, email, name, and password.
 * It differs from updateUserProfile in that it uses form data to submit the request,
 * allowing for file uploads (e.g., profile images).
 * 
 * TODO: This might replace the updateUserProfile request written above.
 */
export const updateUser = async (data: FormData) => {
  return await axiosApiInstance.patch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/`,
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
};

/**
 * Updates the workspace profile using form data instead of JSON payload.
 * This allows for file uploads (e.g., workspace images) in a more efficient way
 * than base64.
 * 
 * TODO: This might replace the updateWorspaceProfile request written above.
 */
export const updateWorkspaceWithFormData = async (data: FormData) => {
  return await axiosApiInstance.patch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/workspace/`,
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
};

/**
 * Updates the user profile using form data instead of JSON payload.
 * This allows for file uploads (e.g., profile images) in a more efficient way
 * than base64.
 * 
 * TODO: This might replace the updateUserProfile request written above.
 */
export const updateUserProfileWithFormData = async (data: FormData) => {
  return await axiosApiInstance.patch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/`,
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
};

export const declineInvite = async (inviteId: string) => {
  const formattedInviteId = formatId(inviteId, 'inv');
  return await axiosApiInstance.post(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/workspace/invite/decline/${formattedInviteId}/`,
    { invite_id: formattedInviteId }
  );
};

export const acceptInvite = async (inviteId: string) => {
  const formattedInviteId = formatId(inviteId, 'inv');
  return await axiosApiInstance.post(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/workspace/invite/accept/${formattedInviteId}/`,
    { invite_id: formattedInviteId }
  );
};

export const createApiKey = async ({
  assignee_id,
  name,
  type,
  is_dev_mode
}: {
  assignee_id: string;
  name?: string;
  type: string;
  is_dev_mode: boolean;
}) => {
  try {
    const response = await axiosApiInstance.post('/workspace/api-key/', {
      assignee_id: formatId(assignee_id, 'usr'),
      name,
      type,
      is_dev_mode
    });

    if (response && response.data) {
      return {
        status: true,
        message: "API key created successfully",
        data: response.data,
      };
    }
  } catch (error: any) {
    console.log("error", error);
    const errorMessage = error?.response?.data?.detail || error?.message;
    return { 
      status: false, 
      message: errorMessage || "Failed to create API key" 
    };
  }
};

export const deleteApiKey = async (apiKeyId: string) => {
  try {
    const response = await axiosApiInstance.delete(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/workspace/api-key/${apiKeyId}/`
    );

    if (response && response.data) {
      return {
        status: true,
        message: "API key deleted successfully",
        data: response.data,
      };
    }
  } catch (error: any) {
    const errorMessage = error?.response?.data?.detail || error?.message;
    return { 
      status: false, 
      message: errorMessage || "Failed to delete API key" 
    };
  }
};
