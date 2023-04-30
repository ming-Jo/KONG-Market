import React from "react";

interface CommonInputProps {
  type: string;
  id?: string;
  defaultValue?: string;
  name?: string;
  placeholder?: string;
  className?: string;
}

interface CommonLabelInputProps {
  type: string;
  children?: React.ReactNode;
  id?: string;
  placeholder?: string;
  autocomplete?: string;
  labelClassName?: string;
  inputClassName?: string;
}

interface InvalidSpanProps {
  children: React.ReactNode;
  className?: string;
}

export const CommonInput = ({ ...props }: CommonInputProps) => {
  return (
    <input
      type={props.type}
      id={props.id}
      defaultValue={props.defaultValue}
      name={props.name}
      placeholder={props.placeholder}
      className={`peer p-[1.6rem] border border-dark-gray rounded-[0.5rem] text-[1.6rem] invalid:outline-red-400 valid:outline-green-300 ${
        props.className || ""
      }`}
    />
  );
};

export const CommonLabelInput = ({ ...props }: CommonLabelInputProps) => {
  return (
    <>
      <label
        htmlFor={props.id}
        className={`mt-5 mb-4 text-[1.6rem] text-dark-gray ${
          props.labelClassName || ""
        }`}
      >
        {props.children}
      </label>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        autoComplete={props.autocomplete}
        className={`peer p-[1.6rem] border border-dark-gray rounded-[0.5rem] text-[1.6rem]  invalid:outline-red-400 valid:outline-green-300 ${
          props.inputClassName || ""
        }`}
      />
    </>
  );
};

export const InvalidSpan = ({ children, ...props }: InvalidSpanProps) => {
  return (
    <span
      className={`hidden peer-invalid:block mt-2 text-red-400 ${
        props.className || ""
      }`}
    >
      {children}
    </span>
  );
};
