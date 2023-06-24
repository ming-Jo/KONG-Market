import React from "react";
import { Link } from "react-router-dom";

interface HeaderIconBtnProps {
  children: React.ReactNode;
  svg: React.FC<React.SVGProps<SVGSVGElement>>;
  stroke?: string;
  to: string;
  color: string;
}

const HeaderIconButton = ({
  svg: SvgComponent,
  ...props
}: HeaderIconBtnProps) => {
  return (
    <Link to={props.to} className={`inline-block text-[1.2rem] ${props.color}`}>
      <SvgComponent stroke={props.stroke} className="w-full h-[3.2rem] mb-2" />
      {props.children}
    </Link>
  );
};

export default HeaderIconButton;
