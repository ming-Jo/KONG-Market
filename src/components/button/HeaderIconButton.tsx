import React from 'react';

interface HeaderIconBtnProps {
  children?: React.ReactNode;
  svg: React.FC<React.SVGProps<SVGSVGElement>>;
  stroke?: string;
  color?: string;
  className?: string;
  onClick?: () => void;
}

const HeaderIconButton = ({ svg: SvgComponent, ...props }: HeaderIconBtnProps) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={`inline-block text-[1.2rem] p-4 rounded-[5rem] hover:bg-light-gray ${props.color} ${props.className}`}
    >
      <SvgComponent stroke={props.stroke} className={`w-full h-[2.6rem]`} />
      {props.children}
    </button>
  );
};

export default HeaderIconButton;
