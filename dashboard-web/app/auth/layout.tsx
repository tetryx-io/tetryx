import Logo from "@/components/Shared/Logo";
import Providers from "@/lib/providers/Providers";
import Link from "next/link";
import { IoDocumentTextOutline } from "react-icons/io5";

const AuthLayout = ({ children }) => {
  return (
    <Providers>
      <div className="flex flex-col w-screen min-h-screen items-center justify-between">
        <div className="py-6">
          <Logo />
        </div>

        <div className="flex flex-col items-center gap-16 p-6 sm:p-10 bg-neutral-50 w-full">
          <div className="w-full max-w-[480px] px-8 py-10 rounded-md bg-white border border-neutral-200">
            {children}
          </div>
        </div>

        <>
          <div className="w-full mt-12 pb-6">
            <div className="mx-auto px-8 w-fit flex flex-wrap gap-y-4 gap-x-6 md:gap-x-8 items-center justify-center text-sm font-medium text-neutral-500">
              <Link
                href="/legal/privacy"
                className="hover:text-neutral-700 relative after:bg-neutral-800 after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 after:delay-150"
              >
                Privacy policy
              </Link>
              <Link
                href="/legal/terms"
                className="hover:text-neutral-700 relative after:bg-neutral-800 after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 after:delay-150"
              >
                Terms of service
              </Link>
            </div>
          </div>
        </>
      </div>
    </Providers>
  );
};

export default AuthLayout;
