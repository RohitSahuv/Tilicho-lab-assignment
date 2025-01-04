import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "react-responsive-pagination";
import { AppColors } from "../../lib/constant";

interface PaginationProps {
  onPageChange: (page: number) => void;
  totalPage: number;
  currentPage?: number;
}

const ResponsivePagination: React.FC<PaginationProps> = ({
  onPageChange,
  totalPage,
  currentPage = 1,
}) => {
  const [activePage, setActivePage] = useState(currentPage);

  useEffect(() => {
    setActivePage(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setActivePage(page);
    onPageChange(page);
  };

  return (
    <PaginationContainer>
      <Pagination
        total={totalPage}
        current={activePage}
        onPageChange={handlePageChange}
        maxWidth={5}
      />
    </PaginationContainer>
  );
};

export default React.memo(ResponsivePagination);

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;

  .pagination {
    display: flex;
    list-style: none;
    gap: 0.5rem;
    padding: 0;

    li {
      cursor: pointer;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem 0.8rem;
        border: 1px solid #ddd;
        border-radius:50%;
        color: #333;
        text-decoration: none;
        &:hover {
          background-color: ${AppColors.Yellow};
        }
     }

       &.active > a {
        border-radius:50%;
        background-color: ${AppColors.Yellow};
        color: black;
        padding: 0.5rem 0.8rem;
      }
    }
  }
`;
