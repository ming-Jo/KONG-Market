import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { fetchProductData, getProductState } from "@store/slice/productSlice";
import Carousel from "@components/carousel/Carousel";
import HomeSection from "@pages/Home/HomeSection";
import PaginationGroup from "@pages/Home/pagination/PaginationGroup";

const Home = () => {
  const dispatch = useAppDispatch();
  const { status, productList, totalPage } = useAppSelector(getProductState);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchProductData(page));
    window.scrollTo(0, 0);
  }, [page]);

  const getPageCount = (currentPage: number) => {
    setPage(currentPage);
  };

  return (
    <main className="max-w-[138rem] mx-auto">
      <Carousel />
      <HomeSection productList={productList} />
      <PaginationGroup totalPage={totalPage} getPageCount={getPageCount} />
    </main>
  );
};

export default Home;
