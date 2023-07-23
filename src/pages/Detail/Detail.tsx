import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { fetchProductDetail, getDetailState } from "@store/slice/detailSlice";
import DetailUiGroup from "@components/details/DetailUiGroup";
import DetailTab from "@components/details/DetailTab";

const Detail = () => {
  const { productId } = useParams();
  const { detail } = useAppSelector(getDetailState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductDetail(Number(productId)));
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-[138rem] mx-auto my-[8.6rem] px-16 pt-24">
      {detail && (
        <section className="grid w-full grid-cols-2 gap-x-20">
          <h2 className="sr-only">상품 디테일 페이지 UI</h2>
          <DetailUiGroup />
          <DetailTab />
        </section>
      )}
    </div>
  );
};

export default Detail;
