import React from 'react';
import { useAppSelector } from '@hooks/hooks';
import { getDetailState } from '@store/slice/detailSlice';
import ProductDetail from '@components/details/ProductDetail';
import ProductCount from '@components/details/ProductCount';
import { CommonButton } from '@components/button/CommonButton';

interface DetailUiGroupProps {
  disabled: boolean;
  count: number;
  getProductCount: (num: number) => void;
}

const DetailUiGroup = ({ ...props }: DetailUiGroupProps) => {
  const { detail } = useAppSelector(getDetailState);

  return (
    <div className="grid w-full grid-cols-2 gap-16 max-[700px]:grid-cols-1">
      {detail && (
        <>
          {/* 상품 이미지 */}
          <div className="w-full relative rounded-3xl overflow-hidden before:block before:pb-[100%] before:bg-light-gray">
            <img src={detail?.image} alt="상품 대표이미지" className="absolute top-0 object-cover w-full h-full" />
          </div>

          {/* 상품 정보 */}
          <div className="flex flex-col justify-between">
            <ProductDetail />
            <div className="flex flex-col gap-[2vh] border-t-2 b-disabled-gray pt-[2vh]">
              <ProductCount
                count={props.count}
                getProductCount={props.getProductCount}
                price={detail?.price}
                stock={detail?.stock}
              />
              <div className="grid grid-cols-[2fr_1fr] gap-5">
                <CommonButton disabled={props.disabled}>바로 구매</CommonButton>
                <CommonButton disabled={props.disabled}>장바구니</CommonButton>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailUiGroup;
