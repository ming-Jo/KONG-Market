import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@hooks/hooks';
import { getLoginUserType, getToken } from '@store/slice/loginSlice';
import { fetchProductDetail, getDetailState } from '@store/slice/detailSlice';
import DetailUiGroup from '@components/details/DetailUiGroup';
import DetailTab from '@components/details/DetailTab';

const Detail = () => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();

  // const authToken = useAppSelector(getToken);
  const userType = useAppSelector(getLoginUserType);
  const { detail } = useAppSelector(getDetailState);

  const [count, setCount] = useState(1);

  useEffect(() => {
    dispatch(fetchProductDetail(Number(productId)));
    window.scrollTo(0, 0);
  }, []);

  const disableButton = userType === 'SELLER' || detail?.stock === 0;
  const getProductCount = (num: number) => setCount(num);

  return (
    <div className="max-w-[138rem] mx-auto my-[8.6rem] px-16 pt-24">
      <section>
        <h2 className="sr-only">상품 디테일 페이지 UI</h2>
        <DetailUiGroup disabled={disableButton} count={count} getProductCount={getProductCount} />
        <DetailTab />
      </section>
    </div>
  );
};

export default Detail;
