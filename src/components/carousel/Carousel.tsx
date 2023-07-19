import React from "react";
import {
  LeftArrowButton,
  RightArrowButton,
} from "@components/button/ArrowButton";
import DotButtons from "@components/carousel/DotButton";

const Carousel = () => {
  return (
    <article className="h-[50rem] bg-yellow-50 relative mt-[8.6rem]">
      <h2 className="sr-only">메인 홈 배너 캐러셀</h2>
      <LeftArrowButton className="absolute left-0 h-full top-1/2 -translate-y-2/4" />
      <RightArrowButton className="absolute right-0 h-full top-1/2 -translate-y-2/4" />
      <div className="absolute flex gap-4 bottom-10 left-1/2 -translate-x-2/4">
        <DotButtons />
        <DotButtons />
        <DotButtons />
        <DotButtons />
      </div>
    </article>
  );
};

export default Carousel;
