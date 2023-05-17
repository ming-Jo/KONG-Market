import React from "react";

interface CommonBtnProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  icon?: string;
  className?: string;
  disabled?: boolean;
}

export const CommonButton = ({ children, ...props }: CommonBtnProps) => {
  return (
    <button
      {...props}
      className={`px-[3.2rem] py-[1.6rem] rounded-[0.5rem] text-white bg-main-choco disabled:bg-disabled-gray ${
        props.className || ""
      }`}
    >
      {props.icon && <img src={props.icon} />}
      {children}
    </button>
  );
};

export const DetailMenuButton = ({ children, ...props }: CommonBtnProps) => {
  return (
    <button
      type="button"
      className={`w-full py-8 border-b-[0.6rem] b-disabled-gray ${
        props.className || ""
      }`}
    >
      {children}
    </button>
  );
};
