import Link from "next/link";
import { IoDocumentTextOutline } from "react-icons/io5";

const AuthLayout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-col flex-1 bg-alternative">
        <div className="absolute top-0 w-full px-8 mx-auto sm:px-6 lg:px-8 pt-6">
          <nav className="relative flex items-center justify-between sm:h-10">
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <Link href={"/"}>
                <img src="/reframe-full.svg" width={100} />
              </Link>
            </div>
            <div className="items-center hidden space-x-3 md:ml-10 md:flex md:pr-4">
              <Link
                href={"https://docs.atrium.st"}
                className="flex items-center cursor-pointer shadow-sm text-xs rounded-md gap-2 border text-foreground bg-surface-100 hover:bg-selection px-2.5 py-1"
              >
                <IoDocumentTextOutline />
                <span className="truncate"> Documentation </span>
              </Link>
            </div>
          </nav>
        </div>
        <div className="flex flex-1">
          <main className="flex flex-col items-center flex-1 flex-shrink-0 px-5 pt-16 pb-8 border-r shadow-lg bg-background border-default">
            {children}
            <div className="sm:text-center">
              <p className="text-xs text-foreground-lighter sm:mx-auto sm:max-w-sm">
                By continuing, you agree to Reframe's
                <Link
                  className="underline hover:text-foreground-light mx-2"
                  href="/legal/terms"
                >
                  Terms of Service
                </Link>
                <Link
                  className="underline hover:text-foreground-light"
                  href="/legal/privacy"
                >
                  Privacy Policy
                </Link>
                , and to receive periodic emails with updates.
              </p>
            </div>
          </main>
          <aside className="flex-col items-center justify-center flex-1 flex-shrink hidden basis-1/4 xl:flex">
            <div className="relative flex flex-col gap-6">
              <blockquote className="z-10 max-w-lg text-3xl">
                Reframe AI delivers curated, AI-verified leads to you. Utilize
                the power of our AI agents (virtual assistants) to research your
                leads.
              </blockquote>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
