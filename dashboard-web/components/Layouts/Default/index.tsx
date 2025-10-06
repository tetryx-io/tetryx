"use client";
import { usePathname } from "next/navigation";
import Footer from "../Footer";
import Header from "../Header";
import { useTetryxAuth as useSupabaseAuth } from "@/lib/providers/auth";
import { useSessionContext } from "@/lib/context/session";

const DefaultLayout = ({ children }) => {
  const { user, loading, supabase } = useSupabaseAuth();
  const pathName = usePathname();
  const { session } = useSessionContext();

  const onBuildPath = pathName.startsWith("/studio");
  const onAgentSetupPage =
    pathName.split("/")[1] === "agent" && pathName.split("/")[3] === "setup";
  const onChatPage = pathName.split("/")[3] === "thread";
  const headerIncludedPaths = [
    /^\/$/,
    /^\/studio(\/.*)?$/,
    /^\/home(\/.*)?$/,
    /^\/agent(\/.*)?$/,
    /^\/settings(\/.*)?$/,
    /^\/editor\/playground(\/.*)?$/,
    /^\/history(\/.*)?$/,
    /^\/articles\/?$/,
    /^\/blog\/?$/,
    /^\/developers\/?$/,
  ];
  const footerIncludedPaths = [
    /^\/$/,
    /^\/agent(\/.*)?$/,
    /^\/articles\/?$/,
    /^\/blog\/?$/,
    /^\/developers\/?$/,
    /^\/editor\/playground(\/.*)?$/,
  ];
  const googleOneHideTapPaths = [
    /^\/auth\/login(\/.*)?$/,
    /^\/auth\/signup(\/.*)?$/,
  ];
  const shouldRenderHeader = headerIncludedPaths.some((regex) =>
    regex.test(pathName),
  );
  const shouldRenderFooter = footerIncludedPaths.some((regex) =>
    regex.test(pathName),
  );
  const shouldRenderGoogleOneTap = !googleOneHideTapPaths.some((regex) =>
    regex.test(pathName),
  );

  const handleGoogleLoginSuccess = (result) => {
    console.log("Google login success", result);
    // Add any additional logic you need on successful login
  };

  const handleGoogleLoginError = (error) => {
    console.error("Google login error", error);
  };

  return (
    <>
      {/* {shouldRenderGoogleOneTap && <GoogleOneTapLogin onSuccess={handleGoogleLoginSuccess} onError={handleGoogleLoginError} />} */}
      {/* Remove the commented-out Script tag */}
      <div className="flex flex-col min-h-screen justify-between">
        <>
          {shouldRenderHeader && <Header />}

          <div
            className={`${
              session?.data?.is_in_dev_mode && (onBuildPath || onChatPage || onAgentSetupPage)
                ? "mt-[94px]"
                : onBuildPath || onAgentSetupPage || onChatPage
                ? "mt-[58px]"
                : shouldRenderHeader
                ? "mt-20"
                : ""
            }`}
          >
            {children}
          </div>
        </>

        <div>
          {shouldRenderFooter && !onBuildPath && !onAgentSetupPage && !onChatPage && (
            <Footer />
          )}
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
