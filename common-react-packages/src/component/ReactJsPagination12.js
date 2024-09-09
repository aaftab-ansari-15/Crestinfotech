import React, { useState } from "react";
import Pagination from "react-js-pagination";

const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`); // Example items

const ReactJsPagination12 = () => {
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 10;

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const indexOfLastItem = activePage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <h1>Simple Pagination Example</h1>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="d-flex justify-content-center">
        <Pagination
          activePage={activePage}
          itemsCountPerPage={itemsPerPage}
          totalItemsCount={items.length}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ReactJsPagination12;
