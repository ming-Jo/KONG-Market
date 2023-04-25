import React from "react";
import { Link } from "react-router-dom";

interface HeaderIconBtnProps {
  children: React.ReactNode;
  iconSrc: string;
  to: string;
}

const HeaderIconButton = ({ ...props }: HeaderIconBtnProps) => {
  return (
    <Link to={props.to} className="inline-block text-[1.2rem] text-dark-gray">
      <img src={props.iconSrc} alt="" className="w-full h-[3.2rem] mb-2" />
      {props.children}
    </Link>
  );
};

export default HeaderIconButton;
