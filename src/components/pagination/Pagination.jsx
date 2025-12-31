import React from "react";
import ReactPaginate from "react-paginate";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Pagination = ({ pageCount, handlePageClick }) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<HiChevronRight size={20} />}
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel={<HiChevronLeft size={20} />}
      renderOnZeroPageCount={null}
      // Tailwind Styling
      containerClassName="flex items-center gap-2"
      pageClassName="block border border-slate-200 rounded-md hover:bg-slate-50 transition-colors"
      pageLinkClassName="px-3 py-1.5 text-sm font-medium text-slate-600 block cursor-pointer"
      previousClassName="block border border-slate-200 rounded-md hover:bg-slate-50 transition-colors"
      previousLinkClassName="px-2 py-1.5 text-slate-600 block"
      nextClassName="block border border-slate-200 rounded-md hover:bg-slate-50 transition-colors"
      nextLinkClassName="px-2 py-1.5 text-slate-600 block"
      activeClassName="bg-indigo-600 border-indigo-600 !hover:bg-indigo-700"
      activeLinkClassName="text-white hover:text-slate-700"
      disabledClassName="opacity-50 cursor-not-allowed pointer-events-none"
      breakClassName="text-slate-400 px-2"
    />
  );
};

export default Pagination;
