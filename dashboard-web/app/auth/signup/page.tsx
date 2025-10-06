import SignUpPage from "@/components/Pages/Auth/signup";
import validateInviteAndRender from "@/lib/utils/accept-invite";

const Signup = async ({ searchParams }) => {
  console.log("Signup invite_id", searchParams.invite_id);

  return await validateInviteAndRender(
    { params: { ...searchParams } },
    SignUpPage,
  );
};

export default Signup;
