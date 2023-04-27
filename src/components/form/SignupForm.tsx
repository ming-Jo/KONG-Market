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
      <div className="flex text-main-choco font-medium">
        <LoginTapButton active={true}>구매회원가입</LoginTapButton>
        <LoginTapButton active={false}>판매회원가입</LoginTapButton>
      </div>
      <form className="flex flex-col items-center">
        <fieldset className="flex flex-col w-full p-[4rem] rounded-b-[1rem] border-r border-l border-b border-main-choco">
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
          <CommonLabelInput children="이름" id="userName" type="text" />
        </fieldset>
        <CommonButton
          type="submit"
          className="w-[48rem] my-[3.6rem] text-[1.8rem]"
        >
          가입하기
        </CommonButton>
      </form>
    </section>
  );
};

export default SignupForm;
