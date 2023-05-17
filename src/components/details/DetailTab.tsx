import React from "react";
import { DetailMenuButton } from "@components/button/CommonButton";

const DetailTab = () => {
  return (
    <div className="col-[span_2/auto] mt-[10rem]">
      <ul className="grid grid-cols-4 text-[1.8rem]">
        <li>
          <DetailMenuButton>제품 상세</DetailMenuButton>
        </li>
        <li>
          <DetailMenuButton>리뷰</DetailMenuButton>
        </li>
        <li>
          <DetailMenuButton>Q&A</DetailMenuButton>
        </li>
        <li>
          <DetailMenuButton>반품/교환정보</DetailMenuButton>
        </li>
      </ul>
      <div></div>
    </div>
  );
};

export default DetailTab;
