import request from "./request";

export const addProjectMembers = async (payload: any) => {
  try {
    const response = await request.post(`/auth/mgmt/invite/`, payload);
    return response.data;
  } catch (error) {
    return false;
  }
};

export const getProjects = async (orgId: string, userId: string) => {
  try {
    const payload = {
      org_id: orgId,
      user_id: userId,
    };
    const response = await request.post(`/project/list/`, { ...payload });
    return response?.data?.data || [];
  } catch (error) {
    // notify("Request failed", "Failed to get projects data");
    return [];
  }
};

export const getDataSets = async (project_id: string) => {
  try {
    const payload = {
      project_id: project_id,
    };
    const response = await request.post(`/dataset/list/`, { ...payload });
    return response?.data?.data || [];
  } catch (error) {
    console.log(error);
    // notify("Request failed", "Failed to get dataset data");
    return [];
  }
};

export const addProjects = async (payload: any) => {
  try {
    const response = await request.post(`/project`, payload);
    return response.data;
  } catch (error) {
    return [];
  }
};

export const createStateData = async (user_id: any, data: any) => {
  // const [createState, { ...create_state_gql }] = useMutation(
  //   InsertAppStateDocument,
  //   {
  //     errorPolicy: "all",
  //     refetchQueries: [
  //       {
  //         query: FetchLatestAppStateDocument,
  //         variables: { user_id: user_id },
  //       },
  //     ],
  //   }
  // );
  // createState({
  //   variables: {
  //     object: {
  //       meta: data,
  //       user_id: user_id,
  //     },
  //   },
  // });
};
