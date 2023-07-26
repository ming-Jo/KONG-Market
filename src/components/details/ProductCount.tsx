import React from 'react';
import QuantityButtonBox from '@components/button/QuantityButtonBox';

interface ProductCountProps {
  count: number;
  price: number;
  stock: number;
  getProductCount: (num: number) => void;
}

const ProductCount = ({ count, price, ...props }: ProductCountProps) => {
  return (
    <>
      <QuantityButtonBox getProductCount={props.getProductCount} stock={props.stock} />
      <div className="flex justify-between items-center border-t-2 b-disabled-gray text-[1.8rem] pt-8">
        <p className="font-medium">총 상품 금액</p>
        <div className="flex items-center text-main-choco">
          <p className="text-dark-gray after:content-['|'] after:px-4 after:text-disabled-gray">
            총 수량 <span className="font-bold text-main-choco">{count}</span>개
          </p>
          <strong className="text-[3rem]">
            {price && (price * count).toLocaleString('ko-KR')}
            <span className="pl-1 font-normal">원</span>
          </strong>
        </div>
      </div>
    </>
  );
};

export default ProductCount;
