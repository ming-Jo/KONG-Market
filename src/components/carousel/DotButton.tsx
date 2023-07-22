import React from "react";

interface DotButtonProps {
  onclick: () => void;
  active: boolean;
}

const DotButton = ({ ...props }: DotButtonProps) => {
  return (
    <button
      type="button"
      onClick={props.onclick}
      className={`w-4 h-4 rounded-full shadow-sm ${
        props.active ? "bg-black" : "bg-white"
      }`}
    ></button>
  );
};

export default DotButton;
