import React from 'react';
import { CommonInput, CommonLabelInput, InvalidSpan } from '@components/input/CommonInput';
import { CommonButton } from '@components/button/CommonButton';

interface InputWithButtonProps {
  label: string;
  name: string;
  buttonValue: string;
}

export const InputWithButton = ({ ...props }: InputWithButtonProps) => {
  return (
    <>
      <div className="flex flex-wrap">
        <CommonLabelInput
          type="text"
          label={props.label}
          name={props.name}
          labelClassName="w-full"
          inputClassName="flex-grow"
        />
        <CommonButton type="button" disabled className="w-4/12 ml-5">
          {props.buttonValue}
        </CommonButton>
      </div>
      <InvalidSpan children="아이디는 3-20자 이내의 영어 소문자, 대문자, 숫자만 가능합니다." className="shrink-0" />
    </>
  );
};

export const PasswordInput = () => {
  return (
    <>
      <CommonLabelInput
        label="비밀번호"
        name="userPw"
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
