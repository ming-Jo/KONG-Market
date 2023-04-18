import React from "react";

interface HeaderIconBtnProps {
  children: React.ReactNode;
  iconSrc: string;
}

const HeaderIconButton = ({ ...props }: HeaderIconBtnProps) => {
  return (
    <button type="button" className="text-[1.2rem] text-dark-gray">
      <img src={props.iconSrc} alt="" className="w-full h-[3.2rem] mb-2" />
      {props.children}
    </button>
  );
};

export default HeaderIconButton;
