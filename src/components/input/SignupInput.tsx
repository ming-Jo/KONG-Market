import React, { useEffect, useRef } from 'react';
import { CommonInput, CommonLabelInput, InvalidSpan } from '@components/input/CommonInput';
import { CommonButton } from '@components/button/CommonButton';

interface InputWithButtonProps {
  label: string;
  name: string;
  inputValue: string;
  error: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (value: string) => void;
  valid?: boolean;
  buttonValue?: string;
  onbutton?: boolean;
  disabled?: boolean;
  labelClassName?: string;
  inputClassName?: string;
}

export const InputWithButton = ({ ...props }: InputWithButtonProps) => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  // 입력 버튼 클릭 이벤트 함수
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    props.onClick?.(inputRef.current.value);
  };

  return (
    <>
      <div className="flex flex-wrap">
        <CommonLabelInput
          type="text"
          label={props.label}
          refCurrent={inputRef}
          name={props.name}
          value={props.inputValue}
          onChange={props.onChange}
          valid={props.valid}
          labelClassName={props.labelClassName}
          inputClassName={props.inputClassName}
        />
        {props.onbutton?.toString() && (
          <CommonButton
            type="button"
            onClick={handleButtonClick}
            disabled={!props.onbutton}
            className="w-4/12 ml-5"
          >
            {props.buttonValue}
          </CommonButton>
        )}
      </div>

      {props.inputValue && props.error ? (
        <InvalidSpan valid={props.valid} className="shrink-0">
          {props.error}
        </InvalidSpan>
      ) : null}
    </>
  );
};

interface PasswordInputProps {
  inputValue1: string;
  inputValue2: string;
  error1: string;
  error2: string;
  valid1: boolean;
  valid2: boolean;
  onChange1: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChange2: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordInput = ({ ...props }: PasswordInputProps) => {
  return (
    <>
      <CommonLabelInput
        label="비밀번호"
        name="password"
        type="password"
        onChange={props.onChange1}
        value={props.inputValue1}
        disabled={props.valid1}
        inputClassName={`bg-no-repeat bg-[42.5rem] ${
          props.valid1
            ? "bg-[url('/src/assets/icon-check-on.svg')]"
            : "bg-[url('/src/assets/icon-check-off.svg')]"
        }`}
      />
      {props.inputValue1 && props.error1 ? (
        <InvalidSpan valid={props.valid1}>{props.error1}</InvalidSpan>
      ) : null}
      <CommonLabelInput
        label="비밀번호 확인"
        name="passwordConfirm"
        type="password"
        onChange={props.onChange2}
        value={props.inputValue2}
        disabled={props.valid2}
        inputClassName={`bg-no-repeat bg-[42.5rem] ${
          props.valid2
            ? "bg-[url('/src/assets/icon-check-on.svg')]"
            : "bg-[url('/src/assets/icon-check-off.svg')]"
        }`}
      />
      {props.inputValue2 && props.error2 ? (
        <InvalidSpan valid={props.valid2}>{props.error2}</InvalidSpan>
      ) : null}
    </>
  );
};

interface PhoneInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value2: string;
  value3: string;
  error: string;
}

export const PhoneInput = ({ ...props }: PhoneInputProps) => {
  return (
    <div className="mt-5">
      <label htmlFor="phone" className="text-dark-gray">
        휴대폰 번호
      </label>
      <div className="flex gap-[1.2rem] mt-4">
        <CommonInput
          type="text"
          value="010"
          name="phone1"
          onChange={props.onChange}
          className="flex-grow min-w-0 text-center basis-0"
        />
        <CommonInput
          type="text"
          id="phone"
          name="phone2"
          value={props.value2}
          onChange={props.onChange}
          className="flex-grow min-w-0 text-center basis-0"
          autoComplete="off"
        />
        <CommonInput
          type="text"
          name="phone3"
          value={props.value3}
          onChange={props.onChange}
          autoComplete="off"
          className="flex-grow min-w-0 text-center basis-0"
        />
      </div>
      {props.error && <InvalidSpan className="shrink-0">{props.error}</InvalidSpan>}
    </div>
  );
};
