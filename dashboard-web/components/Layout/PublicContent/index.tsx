import Link from "next/link";
import { CiViewTable } from "react-icons/ci";
import { IoDownloadOutline } from "react-icons/io5";

const PublicContent = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="flex-shrink-0 w-20 bg-white shadow-lg border-r">
        <div className="flex flex-col h-full">
          <div className="flex justify-center p-4 mt-5">
            <Link href={"/"} className="w-fit h-6 md:h-8">
              <img src="/favicon.svg" alt="Logo" className="logo w-fit h-8"/>
            </Link>
          </div>
          <nav className="flex-1 justify-center space-y-4 mt-16">
            <Link
              href="#"
              className="flex items-center justify-center p-4 text-gray-400 hover:bg-gray-200"
            >
              <CiViewTable className="w-fit h-6 text-lg" />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center p-4 text-gray-400 hover:bg-gray-200"
            >
              <IoDownloadOutline className="rotate-90 w-fit h-6 text-lg" />
            </Link>
          </nav>
        </div>
      </div>
      <div className="flex-1 overflow-x-hidden overflow-y-auto">{children}</div>
    </div>
  );
};

export default PublicContent;
