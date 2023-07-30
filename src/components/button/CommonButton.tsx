import React from 'react';

interface CommonBtnProps {
  children: React.ReactNode;
  type?: 'button' | 'submit';
  icon?: string;
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface DetailMenuButtonProps extends CommonBtnProps {
  clicked: boolean;
}

export const CommonButton = ({ children, ...props }: CommonBtnProps) => {
  return (
    <button
      {...props}
      onClick={props.onClick}
      className={`px-[3.2rem] py-[1.6rem] rounded-[0.5rem] text-white bg-main-choco disabled:bg-disabled-gray ${
        props.className || ''
      }`}
    >
      {props.icon && <img src={props.icon} />}
      {children}
    </button>
  );
};

export const DetailMenuButton = ({ children, ...props }: DetailMenuButtonProps) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={`w-full py-8 border-b-[0.6rem] text-[1.8rem] ${
        props.clicked === true ? 'border-main-choco text-main-choco' : 'border-disabled-gray text-dark-gray'
      } ${props.className || ''}`}
    >
      {children}
    </button>
  );
};
