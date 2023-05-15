import React from "react";
import LoginTapButton from "@components/button/LoginTapButton";
import CommonButton from "@components/button/CommonButton";
import { CommonLabelInput } from "@components/input/CommonInput";
import IDInput from "@components/input/SignupIDInput";
import PasswordInput from "@components/input/SignupPasswordInput";
import PhoneInput from "@components/input/SignupPhoneInput";
import EmailInput from "@components/input/SignupEmailInput";

const SignupForm = () => {
  return (
    <section className="flex flex-col mx-auto w-[55rem] mb-[10rem]">
      <h2 className="sr-only">회원가입 화면</h2>
      <div className="flex font-medium text-main-choco">
        <LoginTapButton active={true}>구매회원가입</LoginTapButton>
        <LoginTapButton active={false}>판매회원가입</LoginTapButton>
      </div>
      <form className="flex flex-col items-center">
        <fieldset className="flex flex-col w-full p-[3.8rem] rounded-b-[1rem] border-r border-l border-b border-main-choco">
          <legend className="sr-only">회원가입 양식</legend>
          <IDInput />
          <PasswordInput />
          <CommonLabelInput
            children="이름"
            id="userName"
            type="text"
            labelClassName="pt-10"
          />
          <PhoneInput />
          <EmailInput />
        </fieldset>
        <div className="flex items-start w-[47rem] m-14 text-dark-gray">
          <input
            type="checkbox"
            id="agree"
            className="w-6 h-6 m-1 cursor-pointer accent-main-choco"
          />
          <label htmlFor="agree" className="ml-2 leading-8 cursor-pointer">
            KONG Market의 <u className="font-bold">이용약관</u> 및{" "}
            <u className="font-bold">개인정보처리방침</u>에 대한 내용을
            확인하였고 동의합니다.
          </label>
        </div>
        <CommonButton
          type="submit"
          disabled
          className="w-[48rem] text-[1.8rem]"
        >
          가입하기
        </CommonButton>
      </form>
    </section>
  );
};

export default SignupForm;
