import React from "react";
import ReactPaginate from "react-paginate";
import css from "./Pagination.module.scss";

const Pagination = ({ onChangePage }) => {
  return (
    <ReactPaginate
      className={css.pagination}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
