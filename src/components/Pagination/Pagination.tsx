import React from "react";
import ReactPaginate from "react-paginate";
import css from "./Pagination.module.scss";

type PaginationTypes = {
  currentPage: number;
onChangePage: (page: number) => void;
};

const Pagination: React.FC<PaginationTypes> = ({ currentPage, onChangePage }) => {
  return (
    <ReactPaginate
      className={css.pagination}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
      previousLabel="<"
      // renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
