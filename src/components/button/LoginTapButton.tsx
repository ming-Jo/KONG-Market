import React from 'react';

interface LoginTapBtnProps {
  children: React.ReactNode;
  active?: boolean;
}

const LoginTapButton = ({ ...props }: LoginTapBtnProps) => {
  return (
    <button
      type="button"
      className={`${
        props.active
          ? "btn-login-tap before:content-[''] before:absolute before:-bottom-[1.6rem] before:left-0 before:bg-white before:block before:w-full before:h-[2rem] before:px-[2rem] before:border before:border-white"
          : 'btn-login-tap bg-[#f1ece8]'
      }`}
    >
      {props.children}
    </button>
  );
};

export default LoginTapButton;
