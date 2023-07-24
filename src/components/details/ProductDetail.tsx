import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "@hooks/hooks";
import { getDetailState } from "@store/slice/detailSlice";

const ProductDetail = () => {
  const { detail } = useAppSelector(getDetailState);

  return (
    <div>
      <Link to="/" className="text-[1.8rem] text-dark-gray">
        {detail?.store_name}
      </Link>
      <strong className="block text-[3rem] font-normal mt-4 mb-6">
        {detail?.product_name}
      </strong>
      <p className="text-[3rem] font-bold">
        {detail?.price.toLocaleString("ko-KR")}
        <span className="pl-1 font-normal">원</span>
      </p>
      <p className="py-6 text-dark-gray">
        {detail?.shipping_method === "PARCEL" ? "직접배송" : "택배배송"} /{" "}
        {detail?.shipping_fee === 0
          ? "무료배송"
          : `배송비 ${detail?.shipping_fee.toLocaleString("ko-KR")} 원`}
      </p>
    </div>
  );
};

export default ProductDetail;
