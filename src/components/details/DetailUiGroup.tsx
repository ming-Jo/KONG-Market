import React from "react";
import { Link } from "react-router-dom";
import { CommonButton } from "@components/button/CommonButton";

const DetailUiGroup = () => {
  return (
    <>
      <div className="w-full max-w-[60rem] relative before:block before:pb-[100%] before:bg-light-gray">
        <img
          src=""
          alt="상품 대표이미지"
          className="absolute top-0 object-cover w-full"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <Link to="/" className="text-[1.8rem] text-dark-gray">
            판매업체명
          </Link>
          <strong className="block text-[3rem] font-normal mt-4 mb-6">
            상품 이름 어쩌구저쩌구
          </strong>
          <p className="text-[3rem] font-bold">
            10,000<span className="pl-1 font-normal">원</span>
          </p>
        </div>
        <div className="flex flex-col gap-[2vh]">
          <p className="pb-6 border-b-2 b-disabled-gray text-dark-gray">
            택배배송 / 무료배송
          </p>
          <div className="grid grid-cols-3 w-[15rem] h-20 border b-disabled-gray rounded-lg">
            <button type="button" className="border-r b-disabled-gray">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#c4c4c4"
                strokeWidth="2"
                className="mx-auto"
              >
                <path d="M0 10H20" stroke="current"></path>
              </svg>
            </button>
            <span className="text-center text-[1.8rem] leading-[5rem]">1</span>
            <button type="button" className="border-l b-disabled-gray">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#c4c4c4"
                strokeWidth="2"
                className="mx-auto"
              >
                <path d="M0 9.5H20" stroke="current"></path>
                <path d="M10 20L10 0" stroke="current"></path>
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center border-t-2 b-disabled-gray text-[1.8rem] pt-8">
            <p className="font-medium">총 상품 금액</p>
            <div className="flex items-center text-main-choco">
              <p className="text-dark-gray after:content-['|'] after:px-4 after:text-disabled-gray">
                총 수량 <span className="font-bold text-main-choco">1</span>개
              </p>
              <strong className="text-[3rem]">
                17,500<span className="pl-1 font-normal">원</span>
              </strong>
            </div>
          </div>
          <div className="grid grid-cols-[2fr_1fr] gap-5">
            <CommonButton>바로 구매</CommonButton>
            <CommonButton className="bg-dark-gray">장바구니</CommonButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailUiGroup;
