import React from "react";
import DetailUiGroup from "@components/details/DetailUiGroup";
import DetailTab from "@components/details/DetailTab";

const Detail = () => {
  return (
    <div className="max-w-[138rem] mx-auto my-32 px-16">
      <section className="grid w-full grid-cols-2 gap-x-20">
        <h2 className="sr-only">상품 디테일 페이지 UI</h2>
        <DetailUiGroup />
        <DetailTab />
      </section>
    </div>
  );
};

export default Detail;
