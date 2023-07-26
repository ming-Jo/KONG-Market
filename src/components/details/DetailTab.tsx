import React, { useState } from 'react';
import { useAppSelector } from '@hooks/hooks';
import { getDetailState } from '@store/slice/detailSlice';
import { DetailMenuButton } from '@components/button/CommonButton';

const DetailTab = () => {
  const detailMenuList = ['제품 상세', '리뷰', 'Q&A', '반품/교환정보'];

  const { detail } = useAppSelector(getDetailState);
  const [selectText, setSelectText] = useState('제품 상세');

  const handleSelectTab = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.textContent !== null) {
      setSelectText(event.currentTarget.textContent);
    }
  };

  return (
    <div className="mt-[10rem]">
      <ul className="grid grid-cols-4 text-[1.8rem]">
        {detailMenuList.map((item, index) => (
          <li key={index}>
            <DetailMenuButton clicked={selectText === item ? true : false} clickHandler={handleSelectTab}>
              {item}
            </DetailMenuButton>
          </li>
        ))}
      </ul>
      <div className="flex flex-col justify-center items-center mt-20 bg-light-gray h-[45rem] text-disabled-gray text-5xl font-medium text-center h-[45rem]">
        {selectText}
        {selectText === '제품 상세' && <p className="p-10 text-xl text-left">{detail?.product_info}</p>}
      </div>
    </div>
  );
};

export default DetailTab;
