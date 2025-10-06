import React from "react";
import clsx from "clsx";
import OmniLink from "../omnilink";

interface PaginateProps {
  pageNum: number;
  totalPages: number;
  hasMoreBefore: boolean;
  hasMoreAfter: boolean;
  basePath: string;
  onPageChange: (page: number) => void;
}

const Paginate: React.FC<PaginateProps> = ({
  pageNum,
  totalPages,
  hasMoreBefore,
  hasMoreAfter,
  basePath,
  onPageChange
}) => {
  const pageButtonClasses = clsx("flex w-9 h-9 items-center justify-center bg-neutral-200 text-neutral-600 hover:bg-neutral-300 hover:text-neutral-800 text-semibold hover:border-neutral-500 transition-colors rounded-lg")
  return (
    <nav className="flex justify-center items-center w-full border-t md:border-neutral-600 md:border-opacity-10 mt-8 md:mt-12 pt-8 pb-8 mx-auto font-semibold">
      <OmniLink
        disabled={!hasMoreBefore}
        onClick={() => onPageChange(1)}
        className={clsx(
          "hidden md:flex p-2 mr-4 text-neutral-400 hover:text-neutral-500"
        )}
      >
        |←&nbsp;&nbsp;First
      </OmniLink>
      <OmniLink
        disabled={!hasMoreBefore}
        href={`${basePath}/page/${pageNum - 1}`}
        className={clsx(
          "p-2 mr-4 text-neutral-400 hover:text-neutral-500"
        )}
      >
        ←&nbsp;&nbsp;Previous
      </OmniLink>
      <div className="flex text-sm gap-2">
        {pageNum - 2 > 0 && (
          <OmniLink
            href={`${basePath}/page/${pageNum - 2}`}
            className={pageButtonClasses}
          >
            {pageNum - 2}
          </OmniLink>
        )}
        {pageNum - 1 > 0 && (
          <OmniLink
            href={`${basePath}/page/${pageNum - 1}`}
            className={pageButtonClasses}
          >
            {pageNum - 1}
          </OmniLink>
        )}
        <span className="flex w-9 h-9 items-center justify-center bg-neutral-500 text-white rounded-lg">
          {pageNum}
        </span>
        {pageNum + 1 <= totalPages && (
          <OmniLink
            href={`${basePath}/page/${pageNum + 1}`}
            className={pageButtonClasses}
          >
            {pageNum + 1}
          </OmniLink>
        )}
        {pageNum + 2 <= totalPages && (
          <OmniLink
            href={`${basePath}/page/${pageNum + 2}`}
            className={pageButtonClasses}
          >
            {pageNum + 2}
          </OmniLink>
        )}
      </div>
      <OmniLink
        disabled={!hasMoreAfter}
        href={`${basePath}/page/${pageNum + 1}`}
        className={clsx(
          "p-2 ml-4 transition-colors text-neutral-400 hover:text-neutral-500"
        )}
      >
        Next&nbsp;&nbsp;→
      </OmniLink>
      <OmniLink
        disabled={!hasMoreAfter}
        href={`${basePath}/page/${totalPages}`}
        className={clsx(
          "hidden md:flex p-2 ml-4 transition-colors text-neutral-400 hover:text-neutral-500"
        )}
      >
        Last&nbsp;&nbsp;→|
      </OmniLink>
    </nav>
  );
};

export default Paginate;
