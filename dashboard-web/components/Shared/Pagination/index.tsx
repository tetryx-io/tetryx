import clsx from "clsx";

export const Pagination = ({ total, limit, currentPage, hasMore, onPageChange }) => {
  const getPageNumbers = () => {
    const totalPages = Math.ceil(total / limit);
    const pages: number[] = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return [currentPage - 1, currentPage, currentPage + 1].filter(num => num > 0 && num <= totalPages);
  };

  const pageButtonClasses = clsx("px-4 py-2 rounded-md font-semibold text-neutral-600 disabled:opacity-50")
  return (
    <div className="flex justify-center gap-2 mt-8 transition-any smooth">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${pageButtonClasses} hover:bg-neutral-50`}
      >
        ←&nbsp;&nbsp;Previous
      </button>
      <div className="flex justify-center gap-4">
        {getPageNumbers().map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            disabled={pageNum === Math.ceil(total / limit)}
            className={`${pageButtonClasses} ${pageNum === currentPage
              ? 'bg-black text-white'
              : 'hover:text-neutral-800 bg-neutral-50 hover:bg-offWhite'
              }`}
          >
            {pageNum}
          </button>
        ))}
      </div>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!hasMore}
        className={`${pageButtonClasses} hover:bg-neutral-50`}
      >
        Next&nbsp;&nbsp;→
      </button>
    </div>
  );
};