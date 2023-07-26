import React from 'react';

interface handlePageButtonProps {
  onPage?: number;
  totalPage: number;
  handlePageButton: (page: number) => void;
}

const PaginationOl = ({ onPage, totalPage, handlePageButton }: handlePageButtonProps) => {
  return (
    <ol className="flex gap-2 text-[1.8rem]">
      {Array.from({ length: totalPage }).map((_, index) => (
        <li
          key={index}
          onClick={() => handlePageButton(index + 1)}
          className={`px-8 py-5 rounded-full cursor-pointer hover:bg-light-gray ${
            onPage === index + 1 ? 'bg-light-choco' : 'bg-white'
          }`}
        >
          {index + 1}
        </li>
      ))}
    </ol>
  );
};

export default PaginationOl;
