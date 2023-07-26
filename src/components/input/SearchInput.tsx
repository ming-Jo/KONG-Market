import React from 'react';

const SearchInput = () => {
  return (
    <form className="w-[40rem] ml-[3rem]">
      <fieldset className="relative flex items-center justify-between">
        <legend className="sr-only">상품 검색</legend>
        <label htmlFor="searchInp" className="sr-only"></label>
        <input
          type="text"
          id="searchInp"
          placeholder="상품을 검색해보세요!"
          className="w-full px-[2.2rem] py-[1.1rem] bg-light-choco rounded-full border-2 border-main-choco"
        />
        <button
          type="button"
          className="w-[2.8rem] h-[2.8rem] absolute right-[2.2rem] bg-[url('@/assets/icon-search.svg')] bg-no-repeat bg-center bg-cover"
        ></button>
      </fieldset>
    </form>
  );
};

export default SearchInput;
