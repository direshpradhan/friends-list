import React from "react";
import styles from "./Pagination.module.css";

export const Pagination = ({ dataPerPage, data, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(data / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);

  return (
    <>
      <ul className={`${styles.main}`}>
        <p>Pages:</p>
        {pageNumbers.map((number) => {
          return (
            <li
              className={`${styles.page_number} ${
                currentPage === number && styles.active
              }`}
              onClick={() => paginate(number)}
            >
              <p>{number}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
