import React, { Children } from "react";
import { Link } from "react-router-dom";
import { Product } from "@store/slice/productSlice";

const ProductListItem = ({ product }: { product: Product }) => {
  return (
    <li className="w-full">
      <Link to={`product/${product.product_id}`}>
        <figure>
          <div
            className={`relative mb-8 border border-dark-gray rounded-2xl overflow-hidden h-0 pt-[100%]`}
          >
            <img
              src={`${product ? product.image : ""}`}
              alt=""
              className="absolute top-0 left-0 object-cover h-full"
            />
          </div>
          <p className="text-dark-gray">{product.store_name}</p>
          <figcaption className="text-[1.8rem] mt-4">
            {product.product_name}
            <strong className="block text-[2.4rem] mt-4">
              {product.price.toLocaleString("ko-KR")}
              <span className="ml-2">원</span>
            </strong>
          </figcaption>
        </figure>
      </Link>
    </li>
  );
};

export default ProductListItem;
