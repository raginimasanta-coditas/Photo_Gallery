import React from "react";

const Pagination = ({ imagesPerPage, totalImages, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    // <nav aria-label="Page navigation example">
    //   <ul class="pagination" onClick={() => paginate(number)}>
    //     <li class="page-item">
    //       <a class="page-link" href="#" aria-label="Previous">
    //         <span aria-hidden="true">&laquo;</span>
    //         <span class="sr-only">Previous</span>
    //       </a>
    //     </li>
    //     <li class="page-item">
    //       <a class="page-link" href="#">
    //         1
    //       </a>
    //     </li>
    //     <li class="page-item">
    //       <a class="page-link" href="#">
    //         2
    //       </a>
    //     </li>
    //     <li class="page-item">
    //       <a class="page-link" href="#">
    //         3
    //       </a>
    //     </li>
    //     <li class="page-item">
    //       <a class="page-link" href="#" aria-label="Next">
    //         <span aria-hidden="true">&raquo;</span>
    //         <span class="sr-only">Next</span>
    //       </a>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default Pagination;
