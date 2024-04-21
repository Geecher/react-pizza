import ReactPaginate from 'react-paginate';
import s from './Pagination.module.scss';
import { Dispatch, SetStateAction } from 'react';

export type PaginationProps = {
  onChangePage: Dispatch<SetStateAction<number>>;
};

const Pagination = (props: PaginationProps) => {
  return (
    <ReactPaginate
      className={s.reactPaginate}
      breakLabel='...'
      nextLabel='>'
      onPageChange={(event) => props.onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel='<'
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
