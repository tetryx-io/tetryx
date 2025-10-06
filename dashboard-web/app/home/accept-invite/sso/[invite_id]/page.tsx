import Display from "./home";
import validateInviteAndRender from "@/lib/utils/accept-invite";

const Page = async ({ params }: { params: { invite_id?: string } }) => {
  return await validateInviteAndRender({ params }, Display);
};

export default Page;
