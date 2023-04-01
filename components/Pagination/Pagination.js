import React from "react";
import { DOTS, usePagination } from "./usePagination";
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange?.length - 1];
  return (
    <>
      <div className="flex justify-end items-center pt-5">
        <div className="flex items-center space-x-[19px]">
          <button
            disabled={currentPage === 1}
            onClick={onPrevious}
            className="bg-[#CECDD066] flex items-center justify-center rounded-[6px] w-[28.38px] h-[28.38px]"
          >
            <img src="/assets/icons/left-gray.svg" />
          </button>

          {paginationRange?.map((pageNumber) => {
            if (pageNumber === DOTS) {
              return (
                <>
                  <button className="bg-white flex text-violet600 hover:bg-violet600 rounded-[6px] items-center relative justify-center hover:text-white ring-1 ring-purple100 w-[24.75px] h-[24.75px]  text-[13px] font-semibold leading-5">
                    <span className="flex items-center absolute top-[7px] tracking-[1px]">
                      ...
                    </span>
                    <img
                      src="/assets/icons/select.svg"
                      className="absolute bottom-0 right-0"
                    />
                  </button>
                </>
              );
            }

            return (
              <>
                <button
                  onClick={() => onPageChange(pageNumber)}
                  className={
                    pageNumber === currentPage
                      ? "bg-violet600 rounded-[6px] flex items-center justify-center text-white ring-1 ring-purple100 w-[24.75px] h-[24.75px]  text-[13px] font-semibold leading-5"
                      : "bg-white text-violet600 hover:bg-violet600 rounded-[6px] flex items-center justify-center hover:text-white ring-1 ring-purple100 w-[24.75px] h-[24.75px]  text-[13px] font-semibold leading-5"
                  }
                >
                  {pageNumber}
                </button>
              </>
            );
          })}

          <button
            disabled={currentPage === lastPage}
            onClick={onNext}
            className="bg-[#CECDD066] flex items-center justify-center rounded-[6px] w-[28.38px] h-[28.38px]"
          >
            <img src="/assets/icons/right-gray.svg" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
