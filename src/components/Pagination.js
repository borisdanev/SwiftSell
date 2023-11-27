const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination justify-content-center">
        {pageNumbers.map((page) => (
          <li
            key={page}
            className={`page-item me-3 ${currentPage === page ? "active" : ""}`}
          >
            <button
              className="page-link rounded-circle"
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
        {/* <li>
          <button
            className="rounded-circle text-success page-link"
            onClick={() => onPageChange(currentPage + 1)}
          >
            {<FaChevronRight />}
          </button>
        </li> */}
      </ul>
    </nav>
  );
};
export default Pagination;
