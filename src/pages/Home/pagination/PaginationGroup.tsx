import React, { useState } from 'react';
import { LeftArrowButton, RightArrowButton } from '@components/button/ArrowButton';
import PaginationOl from '@pages/Home/pagination/PaginationOl';

interface PageButtonProps {
  totalPage: number;
  getPageCount: (currentPage: number) => void;
}

const PaginationGroup = ({ totalPage, getPageCount }: PageButtonProps) => {
  const [onPage, setOnPage] = useState(1);

  const handlePageButton = (index: number) => {
    setOnPage(index);
    getPageCount(index);
  };

  return (
    <div className="flex items-center justify-center my-20">
      <LeftArrowButton
        onclick={() => handlePageButton(onPage - 1)}
        disabled={onPage === 1 ? true : false}
        className="transition-all opacity-40 hover:scale-110 hover:opacity-80"
      />
      <PaginationOl onPage={onPage} totalPage={totalPage} handlePageButton={handlePageButton} />
      <RightArrowButton
        onclick={() => handlePageButton(onPage + 1)}
        disabled={onPage === totalPage ? true : false}
        className="transition-all opacity-40 hover:scale-110 hover:opacity-80"
      />
    </div>
  );
};

export default PaginationGroup;
