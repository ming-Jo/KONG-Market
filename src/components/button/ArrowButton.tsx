import React from "react";
import { ReactComponent as LeftArrow } from "@assets/icon-swiper-1.svg";
import { ReactComponent as RightArrow } from "@assets/icon-swiper-2.svg";

interface ArrowButtonProps {
  className?: string;
  disabled?: boolean;
  onclick?: () => void;
  stroke?: string;
}

export const LeftArrowButton = ({ ...props }: ArrowButtonProps) => {
  return (
    <button
      type="button"
      className={props.className}
      onClick={props.onclick}
      disabled={props.disabled}
    >
      <LeftArrow stroke={props.disabled ? "#F2F2F2" : "black"} />
    </button>
  );
};

export const RightArrowButton = ({ ...props }: ArrowButtonProps) => {
  return (
    <button
      type="button"
      className={props.className}
      onClick={props.onclick}
      disabled={props.disabled}
    >
      <RightArrow stroke={props.disabled ? "#F2F2F2" : "black"} />
    </button>
  );
};
