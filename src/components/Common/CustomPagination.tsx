import React, { useState, useEffect } from 'react';
import { Pagination } from 'react-bootstrap'; // Assuming you're using React Bootstrap

interface CustomPaginationProps {
  totalPages: number;
  activePage?: number;
  onPageChange: (pageNumber: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({ totalPages, activePage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState<number>(activePage || 1); // Set initial page


  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      onPageChange(pageNumber); // Call the provided callback to notify parent component
    }
  };

  // Calculate page ranges for displaying page numbers
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, currentPage + 2);

  return (
    <Pagination>
      <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
      <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
      {startPage > 1 && <Pagination.Ellipsis />}
      {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
        <Pagination.Item
          key={startPage + i}
          active={currentPage === startPage + i}
          onClick={() => handlePageChange(startPage + i)}
        >
          {startPage + i}
        </Pagination.Item>
      ))}
      {endPage < totalPages && <Pagination.Ellipsis />}
      <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
      <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
    </Pagination>
  );
};

export default CustomPagination;
