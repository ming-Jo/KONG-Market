import React from "react";
import Carousel from "@components/carousel/Carousel";
import ProductListItem from "@components/contents/ProductListItem";

const Home = () => {
  return (
    <div className="max-w-[138rem] mx-auto">
      <Carousel />
      <section className="max-w-[120rem] px-16 py-32 mx-auto">
        <h2 className="sr-only">판매 상품 리스트</h2>
        <ul className="grid grid-cols-3 gap-x-[5vw] gap-y-[5vh] justify-items-center">
          <ProductListItem />
          <ProductListItem />
          <ProductListItem />
          <ProductListItem />
          <ProductListItem />
        </ul>
      </section>
    </div>
  );
};

export default Home;
