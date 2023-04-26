import React from "react";

interface CommonBtnProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  icon?: string;
  className?: string;
}

const CommonButton = ({ children, ...props }: CommonBtnProps) => {
  return (
    <button
      {...props}
      className={`px-[3.2rem] py-[1.6rem] rounded-[0.5rem] text-[1.6rem] text-white bg-main-choco ${
        props.className || ""
      }`}
    >
      {props.icon && <img src={props.icon} />}
      {children}
    </button>
  );
};

export default CommonButton;
