import React, { useEffect, useRef } from 'react';
import { CommonInput, CommonLabelInput, InvalidSpan } from '@components/input/CommonInput';
import { CommonButton } from '@components/button/CommonButton';

interface InputWithButtonProps {
  label: string;
  name: string;
  inputValue: string;
  buttonValue: string;
  onClick?: (value: string) => void;
  onchange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  onbutton?: boolean;
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
          onchange={props.onchange}
          disabled={!props.onbutton}
          labelClassName="w-full"
          inputClassName="flex-grow"
        />
        <CommonButton type="button" onClick={handleButtonClick} disabled={!props.onbutton} className="w-4/12 ml-5">
          {props.buttonValue}
        </CommonButton>
      </div>
      {props.inputValue && props.error ? <InvalidSpan className="shrink-0">{props.error}</InvalidSpan> : null}
    </>
  );
};

export const PasswordInput = () => {
  return (
    <>
      <CommonLabelInput
        label="비밀번호"
        name="password"
        type="password"
        required
        inputClassName="invalid:bg-[url('/src/assets/icon-check-off.svg')] valid:bg-[url('/src/assets/icon-check-on.svg')] bg-no-repeat bg-[42.5rem]"
      />
      <InvalidSpan children="비밀번호는 영문, 숫자 조합 8-20자리를 입력해주세요." />
      <CommonLabelInput
        label="비밀번호 확인"
        name="userPwCheck"
        type="password"
        required
        inputClassName="invalid:bg-[url('/src/assets/icon-check-off.svg')] valid:bg-[url('/src/assets/icon-check-on.svg')] bg-no-repeat bg-[42.5rem]"
      />
      <InvalidSpan children="비밀번호가 일치하지 않습니다." />
    </>
  );
};

export const PhoneInput = () => {
  return (
    <div className="mt-5">
      <label htmlFor="userPhone" className="text-dark-gray">
        휴대폰 번호
      </label>
      <div className="flex gap-[1.2rem] mt-4">
        <CommonInput type="text" defaultValue="010" name="phone1" className="flex-grow min-w-0 text-center basis-0" />
        <CommonInput type="text" id="userPhone" name="phone2" className="flex-grow min-w-0 text-center basis-0" />
        <CommonInput type="text" name="phone3" className="flex-grow min-w-0 text-center basis-0" />
      </div>
    </div>
  );
};
