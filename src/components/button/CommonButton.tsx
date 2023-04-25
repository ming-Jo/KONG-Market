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
      className={`px-[1rem] py-[1.8rem] rounded-[0.5rem] bg-main-choco text-white ${
        props.className || ""
      }`}
    >
      {props.icon && <img src={props.icon} />}
      {children}
    </button>
  );
};

export default CommonButton;
