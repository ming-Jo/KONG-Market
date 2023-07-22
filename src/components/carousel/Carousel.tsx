import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { carouselData } from "@components/carousel/carouselData";
import {
  LeftArrowButton,
  RightArrowButton,
} from "@components/button/ArrowButton";
import DotButton from "@components/carousel/DotButton";

const Carousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(1);

  useEffect(() => {
    const autoSlider = setInterval(() => {
      moveNextImg();
    }, 6000);

    return () => {
      clearInterval(autoSlider);
    };
  }, [carouselIndex]);

  const moveNextImg = () => {
    if (carouselIndex !== carouselData.length) {
      setCarouselIndex(carouselIndex + 1);
    } else {
      setCarouselIndex(1);
    }
  };
  const movePrevImg = () => {
    if (carouselIndex === 1) {
      setCarouselIndex(carouselData.length);
    } else {
      setCarouselIndex(carouselIndex - 1);
    }
  };
  const controlDotButton = (index: number) => {
    setCarouselIndex(index);
  };

  return (
    <article className="h-[50rem] bg-yellow-50 relative mt-[8.6rem] overflow-hidden">
      <h2 className="sr-only">메인 홈 배너 캐러셀</h2>
      {carouselData.map((item, index) => {
        return (
          <Link to="#" key={item.id} className="absolute w-full h-full">
            <img
              src={`/public/images/carouselSample/banner${index + 1}.png`}
              alt=""
              className={`object-cover w-full h-full ${
                carouselIndex === index + 1 ? "opacity-100" : "opacity-0"
              } transition-[opacity] ease-in-out duration-[500ms]`}
            />
          </Link>
        );
      })}
      <LeftArrowButton
        onclick={movePrevImg}
        className="absolute left-0 h-full top-1/2 -translate-y-2/4"
        svgClassName="scale-150"
      />
      <RightArrowButton
        onclick={moveNextImg}
        className="absolute right-0 h-full top-1/2 -translate-y-2/4"
        svgClassName="scale-150"
      />
      <div className="absolute flex gap-4 bottom-10 left-1/2 -translate-x-2/4">
        {Array.from({ length: carouselData.length }).map((_, index) => {
          return (
            <DotButton
              key={index}
              onclick={() => controlDotButton(index + 1)}
              active={carouselIndex === index + 1 ? true : false}
            />
          );
        })}
      </div>
    </article>
  );
};

export default Carousel;
