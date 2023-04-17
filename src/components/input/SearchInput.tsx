import React from "react";

const SearchInput = () => {
  return (
    <form className="w-[40rem] my-[2.2rem]">
      <fieldset className="flex justify-between items-center px-[2.2rem] py-[1rem] bg-light-choco rounded-full border-2 border-main-choco">
        <legend className="sr-only">상품 검색</legend>
        <label htmlFor="searchInp" className="sr-only"></label>
        <input
          type="text"
          id="searchInp"
          placeholder="상품을 검색해보세요!"
          className="text-[1.6rem] bg-transparent"
        />
        <button
          type="button"
          className="w-[2.8rem] h-[2.8rem] bg-[url('src/assets/icon-search.svg')] bg-no-repeat bg-center bg-cover"
        ></button>
      </fieldset>
    </form>
  );
};

export default SearchInput;
