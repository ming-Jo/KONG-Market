import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { fetchProductData, getProductState } from "@store/slice/productSlice";
import Carousel from "@components/carousel/Carousel";
import HomeSection from "@pages/Home/HomeSection";

const Home = () => {
  const { productList } = useAppSelector(getProductState);

  return (
    <main className="max-w-[138rem] mx-auto">
      <Carousel />
      <HomeSection productList={productList} />
    </main>
  );
};

export default Home;
