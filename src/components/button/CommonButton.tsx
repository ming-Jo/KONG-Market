import React from "react";

interface CommonBtnProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  width?: string;
  padding?: string;
  fontSize?: string;
  icon?: string;
}

const CommonButton = ({ children, ...props }: CommonBtnProps) => {
  return (
    <button {...props} className="rounded-lg">
      {props.icon && <img src={props.icon} />}
      {children}
    </button>
  );
};

export default CommonButton;
