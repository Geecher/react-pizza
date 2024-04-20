import ReactPaginate from 'react-paginate';

const Pagination = () => {
  return (
    <ReactPaginate
      className='react-paginate'
      breakLabel='...'
      nextLabel='>'
      onPageChange={(event) => console.log(event)}
      pageRangeDisplayed={5}
      pageCount={3}
      previousLabel='<'
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
