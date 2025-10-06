import axios from "axios";
import { FC } from "react";

type InviteObj =
  | {
      invite_id: string;
      invitee_email: string;
      has_account: boolean;
      namespace_name: string;
    }
  | undefined;

const validateInviteAndRender = async (
  { params }: { params: { invite_id?: string } },
  Component: FC<{ inviteObj: InviteObj; hasInviteError: boolean }>,
) => {
  const { invite_id } = params;
  let response,
    hasError = false;

  console.log("validateInviteAndRender invite_id", invite_id);

  if (invite_id) {
    try {
      response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/workspace/invite/pre-accept/${invite_id}/`,
      );
      console.log("RESPONSE", response.data?.data);
    } catch (e) {
      console.error("ERROR", e.message);
      hasError = true;
    }
  } else {
    console.log("No invite_id found");
  }

  return (
    <Component inviteObj={response?.data?.data} hasInviteError={hasError} />
  );
};

export default validateInviteAndRender;
