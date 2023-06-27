import React from "react";

interface HeaderIconBtnProps {
  children: React.ReactNode;
  svg: React.FC<React.SVGProps<SVGSVGElement>>;
  stroke?: string;
  color?: string;
  className?: string;
  onClick?: () => void;
}

const HeaderIconButton = ({
  svg: SvgComponent,
  ...props
}: HeaderIconBtnProps) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={`inline-block text-[1.2rem] ${props.color} ${props.className}`}
    >
      <SvgComponent
        stroke={props.stroke}
        className={`w-full h-[3.2rem] mb-2`}
      />
      {props.children}
    </button>
  );
};

export default HeaderIconButton;
