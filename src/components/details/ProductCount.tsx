import React from "react";
import AmountButtonBox from "@components/button/AmountButtonBox";

const ProductCount = () => {
  return (
    <>
      <AmountButtonBox />
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
    </>
  );
};

export default ProductCount;
