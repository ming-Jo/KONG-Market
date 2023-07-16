import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { fetchProductData, getProductState } from "@store/slice/productSlice";
import Carousel from "@components/carousel/Carousel";
import ProductListItem from "@components/contents/ProductListItem";

const Home = () => {
  const dispatch = useAppDispatch();
  const { status, productList, totalPage } = useAppSelector(getProductState);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchProductData(page));
    // window.scrollTo(0, 0);
  }, [page]);

  return (
    <main className="max-w-[138rem] mx-auto">
      <Carousel />
      <section className="max-w-[120rem] px-16 py-32 mx-auto">
        <h2 className="sr-only">판매 상품 리스트</h2>
        <ul className="grid grid-cols-3 gap-x-[5vw] gap-y-[5vh] justify-items-center">
          {productList.map((product) => (
            <ProductListItem key={product.product_id} product={product} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Home;
