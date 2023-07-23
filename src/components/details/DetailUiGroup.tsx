import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "@hooks/hooks";
import { getDetailState } from "@store/slice/detailSlice";
import { CommonButton } from "@components/button/CommonButton";
import { ReactComponent as MinusSVG } from "@assets/icon-minus-line.svg";
import { ReactComponent as PlusSVG } from "@assets/icon-plus-line.svg";

const DetailUiGroup = () => {
  const { detail } = useAppSelector(getDetailState);

  return (
    <>
      <div className="w-full max-w-[60rem] relative rounded-3xl overflow-hidden before:block before:pb-[100%] before:bg-light-gray">
        <img
          src={detail?.image}
          alt="상품 대표이미지"
          className="absolute top-0 object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <Link to="/" className="text-[1.8rem] text-dark-gray">
            {detail?.store_name}
          </Link>
          <strong className="block text-[3rem] font-normal mt-4 mb-6">
            {detail?.product_name}
          </strong>
          <p className="text-[3rem] font-bold">
            {detail?.price.toLocaleString("ko-KR")}
            <span className="pl-1 font-normal">원</span>
          </p>
        </div>
        <div className="flex flex-col gap-[2vh]">
          <p className="pb-6 border-b-2 b-disabled-gray text-dark-gray">
            {detail?.shipping_method === "PARCEL" ? "직접배송" : "택배배송"} /{" "}
            {detail?.shipping_fee === 0
              ? "무료배송"
              : `배송비 ${detail?.shipping_fee.toLocaleString("ko-KR")} 원`}
          </p>
          <div className="grid grid-cols-3 w-[15rem] border b-disabled-gray rounded-lg">
            <button type="button" className="border-r b-disabled-gray">
              <MinusSVG className="mx-auto" stroke={"#C4C4C4"} />
            </button>
            <span className="text-center text-[1.8rem] leading-[5rem]">1</span>
            <button type="button" className="border-l b-disabled-gray">
              <PlusSVG className="mx-auto" stroke={"#C4C4C4"} />
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
