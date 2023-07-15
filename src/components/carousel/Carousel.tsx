import React from "react";
import iconSwiperLeft from "@assets/icon-swiper-1.svg";
import iconSwiperRight from "@assets/icon-swiper-2.svg";
import DotButtons from "@components/carousel/DotButton";

const Carousel = () => {
  return (
    <article className="h-[50rem] bg-yellow-50 relative">
      <h2 className="sr-only">메인 홈 배너 캐러셀</h2>
      <button
        type="button"
        className="absolute left-0 h-full top-1/2 -translate-y-2/4"
      >
        <img src={iconSwiperLeft} alt="" />
      </button>
      <button
        type="button"
        className="absolute right-0 h-full top-1/2 -translate-y-2/4"
      >
        <img src={iconSwiperRight} alt="" />
      </button>
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
