import React from 'react';

interface UserTypeTapButtonProps {
  children: React.ReactNode;
  onclick: () => void;
  active?: boolean;
}

const UserTypeTapButton = ({ ...props }: UserTypeTapButtonProps) => {
  return (
    <button
      type="button"
      onClick={props.onclick}
      className={`${
        props.active
          ? "btn-usertype-tap before:content-[''] before:absolute before:-bottom-[1.6rem] before:left-0 before:bg-white before:block before:w-full before:h-[2rem] before:px-[2rem] before:border before:border-white"
          : 'btn-usertype-tap bg-[#f1ece8]'
      }`}
    >
      {props.children}
    </button>
  );
};

export default UserTypeTapButton;
