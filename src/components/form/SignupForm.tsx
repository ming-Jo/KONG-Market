import React from "react";
import LoginTapButton from "@components/button/LoginTapButton";
import CommonButton from "@components/button/CommonButton";
import {
  CommonInput,
  CommonLabelInput,
  InvalidSpan,
} from "@components/input/CommonInput";

const SignupForm = () => {
  return (
    <section className="flex flex-col mx-auto w-[55rem]">
      <h2 className="sr-only">회원가입 화면</h2>
      <div className="flex font-medium text-main-choco">
        <LoginTapButton active={true}>구매회원가입</LoginTapButton>
        <LoginTapButton active={false}>판매회원가입</LoginTapButton>
      </div>
      <form className="flex flex-col items-center">
        <fieldset className="flex flex-col w-full p-[3.8rem] rounded-b-[1rem] border-r border-l border-b border-main-choco">
          <legend className="sr-only">회원가입 양식</legend>
          <label htmlFor="userId" className="mb-4 text-[1.6rem] text-dark-gray">
            아이디
          </label>
          <div className="flex flex-wrap">
            <CommonInput type="text" id="userId" className="flex-grow" />
            <CommonButton type="button" className="ml-5">
              중복확인
            </CommonButton>
            <InvalidSpan
              children="아이디는 3-20자 이내의 영어 소문자, 대문자, 숫자만 가능합니다."
              className="shrink-0"
            />
          </div>
          <CommonLabelInput children="비밀번호" id="userPw" type="password" />
          <InvalidSpan children="비밀번호는 영문, 숫자 조합 8-20자리를 입력해주세요." />
          <CommonLabelInput
            children="비밀번호 확인"
            id="userPwCheck"
            type="password"
          />
          <InvalidSpan children="비밀번호가 일치하지 않습니다." />
          <CommonLabelInput
            children="이름"
            id="userName"
            type="text"
            labelClassName="pt-10"
          />
          <div className="w-[47rem] mt-5">
            <label htmlFor="userPhone" className="text-[1.6rem] text-dark-gray">
              휴대폰 번호
            </label>
            <div className="flex gap-[1.2rem] mt-4">
              <CommonInput
                type="text"
                defaultValue="010"
                name="phone1"
                className="flex-grow min-w-0 text-center basis-0"
              />
              <CommonInput
                type="text"
                id="userPhone"
                name="phone2"
                className="flex-grow min-w-0 text-center basis-0"
              />
              <CommonInput
                type="text"
                name="phone3"
                className="flex-grow min-w-0 text-center basis-0"
              />
            </div>
          </div>
          <div className="w-[47rem] mt-5 text-[1.6rem] text-dark-gray">
            <label htmlFor="userEmail">이메일</label>
            <div className="flex gap-[1.2rem] mt-4 items-center">
              <CommonInput
                type="text"
                id="userEmail"
                name="emailId"
                className="flex-grow min-w-0 basis-0"
              />
              @
              <CommonInput
                type="text"
                name="emailDomain"
                className="flex-grow min-w-0 basis-0"
              />
            </div>
          </div>
        </fieldset>
        <div className="flex items-start w-[47rem] text-[1.6rem] m-14 text-dark-gray">
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
