import React from "react";
import { Link } from "react-router-dom";
import { Product } from "@store/slice/productSlice";

const ProductListItem = ({ product }: { product: Product }) => {
  return (
    <li className="w-full p-5 bg-white shadow-small rounded-3xl hover:bg-light-choco">
      <Link to={`product/${product.product_id}`}>
        <figure>
          <div
            className={`relative mb-5 border border-light-gray rounded-2xl overflow-hidden h-0 pt-[100%]`}
          >
            <img
              src={`${product ? product.image : ""}`}
              alt=""
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
          <p className="px-4 text-dark-gray">{product.store_name}</p>
          <figcaption className="text-[1.8rem] mt-6 mb-2 px-4">
            {product.product_name}
            <strong className="block text-[2rem] mt-1">
              {product.price.toLocaleString("ko-KR")}
              <span className="ml-2 font-normal">원</span>
            </strong>
          </figcaption>
        </figure>
      </Link>
    </li>
  );
};

export default ProductListItem;
