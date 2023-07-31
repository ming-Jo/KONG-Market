import React from 'react';

interface CommonInputProps {
  type: string;
  id?: string;
  value?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
}

interface CommonLabelInputProps {
  type: string;
  label?: string;
  name?: string;
  value?: string;
  refCurrent?: React.RefObject<HTMLInputElement>;
  placeholder?: string;
  autocomplete?: string;
  required?: boolean;
  labelClassName?: string;
  inputClassName?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface InvalidSpanProps {
  // children: React.ReactNode;
  children: string;
  className?: string;
  valid?: boolean;
}

export const CommonInput = ({ ...props }: CommonInputProps) => {
  return (
    <input
      type={props.type}
      id={props.name}
      defaultValue={props.value}
      name={props.name}
      placeholder={props.placeholder}
      required={props.required}
      className={`w-full p-[1.6rem] border border-dark-gray rounded-[0.5rem] invalid:outline-red-400 valid:outline-green-300 ${
        props.className || ''
      }`}
    />
  );
};

export const CommonLabelInput = ({ ...props }: CommonLabelInputProps) => {
  return (
    <>
      <label htmlFor={props.name} className={`mt-5 mb-4 text-dark-gray ${props.labelClassName || ''}`}>
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        ref={props.refCurrent}
        defaultValue={props.value}
        placeholder={props.placeholder}
        autoComplete={props.autocomplete}
        onChange={props.onChange}
        required
        className={`p-[1.6rem] border border-dark-gray rounded-[0.5rem] ${
          props.disabled ? 'outline-red-400' : 'outline-green-300'
        } ${props.inputClassName || ''}`}
      />
    </>
  );
};

export const InvalidSpan = ({ children, ...props }: InvalidSpanProps) => {
  return (
    <span
      className={`block mt-2 text-[1.2rem] ${props.valid ? 'text-green-500' : 'text-red-400'} ${props.className || ''}`}
    >
      {children}
    </span>
  );
};
