import React from "react";
import { Product } from "@store/slice/productSlice";
import ProductListItem from "@components/contents/ProductListItem";

const HomeSection = ({ productList }: { productList: Product[] }) => {
  return (
    <section className="max-w-[120rem] px-16 pt-32 mx-auto">
      <h2 className="sr-only">판매 상품 리스트</h2>
      <ul className="grid grid-cols-3 gap-x-[4vh] gap-y-[5vw] justify-items-center max-[900px]:grid-cols-2">
        {productList.map((product) => (
          <ProductListItem key={product.product_id} product={product} />
        ))}
      </ul>
    </section>
  );
};

export default HomeSection;
