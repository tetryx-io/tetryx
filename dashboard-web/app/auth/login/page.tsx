import LoginPage from "@/components/Pages/Auth/login";
import validateInviteAndRender from "@/lib/utils/accept-invite";

const Login = async ({ searchParams }) => {
  console.log("Login invite_id", searchParams.invite_id);

  return await validateInviteAndRender(
    { params: { ...searchParams } },
    LoginPage,
  );
};

export default Login;
