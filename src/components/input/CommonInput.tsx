import React from "react";

interface CommonInputProps {
  type: string;
  id?: string;
  placeholder?: string;
  className?: string;
}

const CommonInput = ({ ...props }: CommonInputProps) => {
  return (
    <input
      type={props.type}
      id={props.id}
      placeholder={props.placeholder}
      className={`p-[1.6rem] border border-dark-gray rounded-[0.5rem] text-[1.6rem] focus:outline-main-choco ${
        props.className || ""
      }`}
    />
  );
};

export default CommonInput;
