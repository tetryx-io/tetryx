import { useSupabaseAuth } from "@/lib/supabase/provider/auth";
import { Dialog, Transition } from "@headlessui/react";
import { ChangeEvent, useState, useEffect } from "react";
import { RiAlertFill, RiCloseLine, RiLockLine, RiUser3Line } from "react-icons/ri";
import DefaultButton from "../Shared/Button/DefaultButton";
import Input from "../Shared/Input";
import PasswordInput from "../Shared/Input/PasswordInput";
import { useParams, useRouter } from "next/navigation";
import { ImSpinner8 } from "react-icons/im";
import GoogleOneTapLogin from "@/components/Auth/oneTapSignIn";
import { getRedirectUrl } from "@/lib/utils/auth";
import Link from "next/link";

const GetEarlyAccessDialog = ({
  show,
  setShow,
  chat_id_list,
  user,
  isTriggerEnable
}: any) => {
  const router = useRouter();

  // Use the new function to set redirect_url
  const redirect_url = getRedirectUrl();
  console.log("redirect_url", redirect_url);

  const [loading, setLoading] = useState(false);
  const { emailPasswordLogin, googleLogin } = useSupabaseAuth();
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    google: "",
    login: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAuth({
      ...auth,
      [name]: value,
    });
    setError({
      ...error,
      [name]: "",
      login: "",
    });
  };

  const onLogin = async () => {
    const { email, password } = auth;
    const newError = {
      email: email ? "" : "Email is required",
      password: password ? "" : "Password is required",
      google: "",
      login: "",
    };

    if (newError.email || newError.password) {
      setError(newError);
      return;
    }

    setLoading(true);
    const { status, message } = await emailPasswordLogin(auth).then((res) => {
      console.log("‼️ res", res)
      // await postAuthCall(user,chat_id_list);
      
      return res
    });

    if (status && setShow) {
      setShow(false);
      setLoading(false);
    } else if (message === "Invalid login credentials") {
      setError({
        ...error,
        login: "Invalid login credentials",
      });
      setLoading(false);
    }
  };

  const onSignUp = async () => {
    router.push(redirect_url);
  };

  const handleGoogleLoginSuccess = (result) => {
    console.log("Google login success", result);
    setShow(false);
    setLoading(false);
    // Add any additional logic you need on successful login
  };

  const handleGoogleLoginError = (error) => {
    console.error("Google login error", error);
    setError({
      ...error,
      google: "Failed to sign in with Google"
    });
  };

  return (
    <Transition
      show={show}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog
        as="div"
        className="relative z-[100]"
        onClose={() => setShow(false)}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25 dark:bg-opacity-70 flex items-center">
          <Dialog.Panel>
            <div className="w-screen">
              <div className="relative mx-auto flex flex-col gap-8 w-11/12 md:w-10/12 max-w-[480px] px-8 py-10 rounded-md bg-white border border-neutral-200">
                <div
                  className="absolute top-6 right-6"
                  onClick={() => {
                    if(isTriggerEnable){
                      sessionStorage.removeItem("promptData")
                    }
                    setShow(false);
                  }}
                >
                  <RiCloseLine
                    size={32}
                    onClick={() => {}}
                    className="cursor-pointer hover:bg-neutral-100 rounded p-1 text-neutral-400"
                  />
                </div>

                <div className="">
                  <h1 className="mb-2 font-bold text-2xl w-full">Sign in</h1>
                  <h6 className="text-neutral-500">Let's get you back in.</h6>
                </div>
                
                <div className="flex flex-col items-center">
                  <GoogleOneTapLogin
                    onSuccess={handleGoogleLoginSuccess}
                    onError={handleGoogleLoginError}
                  />
                  {error.google && (
                      <div className="text-red-500 text-sm mt-1">{error.google}</div>
                    )}
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-strong "></div>
                  </div>
                  <div className="relative flex justify-center text-sm text-neutral-400">
                    <span className="px-2 flex gap-1 font-semibold uppercase bg-white">
                      or
                    </span>
                  </div>
                </div>

                <div 
                  className="flex flex-col gap-6"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") onLogin();
                  }}
                >
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={auth.email}
                      iconLeft={
                        <RiUser3Line className="mt-2.5 opacity-60" size={18} />
                      }
                      onChange={handleChange}
                    />
                    {error.email && (
                      <div className="text-red-500 text-sm mt-1">{error.email}</div>
                    )}
                  </div>

                  <div>
                    <PasswordInput
                      type="password"
                      name="password"
                      placeholder="Password"
                      iconLeft={
                        <RiLockLine className="mt-2.5 opacity-60" size={18} />
                      }
                      value={auth.password}
                      onChange={handleChange}
                    />
                    {error.password && (
                      <div className="text-red-500 text-sm mt-1">{error.password}</div>
                    )}
                    <label className="hover:underline">
                  <Link
                    href={"/auth/forgot-password"}
                    className="text-neutral-800 text-sm  opacity-60 hover:opacity-100"
                  >
                    Forgot password?
                  </Link>{" "}
          </label>
                  </div>
                  {error.login && (
                    <div className="bg-red-50 text-red-600 flex justify-center items-center gap-2 text-sm font-medium py-1.5 px-4 rounded-md"><RiAlertFill size={16}/>{error.login}</div>
                  )}
                </div>

                <div className="flex flex-col gap-4">
                  <DefaultButton
                    label="Login"
                    variant="primary"
                    size="medium"
                    iconRight={
                      loading && (
                        <ImSpinner8
                          className="animate-spin"
                          size={15}
                          color="white"
                        />
                      )
                    }
                    onClick={onLogin}
                  />

                  <div className="self-center text-sm">
                    <div className="flex">
                      <span className="opacity-60 mr-1">
                        Don't have an account?
                      </span>
                      <DefaultButton
                        label="Get Access"
                        variant="ghost"
                        size="custom"
                        onClick={onSignUp}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default GetEarlyAccessDialog;
