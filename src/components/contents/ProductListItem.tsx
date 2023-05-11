import React from "react";
import { Link } from "react-router-dom";

const ProductListItem = () => {
  return (
    <li className="w-full">
      <Link to="product/:id">
        <figure>
          <div className="relative pt-[100%] mb-8 border border-dark-gray rounded-2xl">
            <img src="" alt="" className="w-full" />
          </div>
          <p className="text-dark-gray">우당탕탕 라이캣의 실험실</p>
          <figcaption className="text-[1.8rem] mt-4">
            상품 설명 어쩌구저쩌구
            <strong className="block text-[2.4rem] mt-4">
              29,000<span className="ml-2">원</span>
            </strong>
          </figcaption>
        </figure>
      </Link>
    </li>
  );
};

export default ProductListItem;
