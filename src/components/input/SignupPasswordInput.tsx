import React from "react";
import { CommonLabelInput, InvalidSpan } from "@components/input/CommonInput";

const SignupPasswordInput = () => {
  return (
    <>
      <CommonLabelInput
        children="비밀번호"
        id="userPw"
        type="password"
        required
        inputClassName="invalid:bg-[url('/src/assets/icon-check-off.svg')] valid:bg-[url('/src/assets/icon-check-on.svg')] bg-no-repeat bg-[42.5rem]"
      />
      <InvalidSpan children="비밀번호는 영문, 숫자 조합 8-20자리를 입력해주세요." />
      <CommonLabelInput
        children="비밀번호 확인"
        id="userPwCheck"
        type="password"
        required
        inputClassName="invalid:bg-[url('/src/assets/icon-check-off.svg')] valid:bg-[url('/src/assets/icon-check-on.svg')] bg-no-repeat bg-[42.5rem]"
      />
      <InvalidSpan children="비밀번호가 일치하지 않습니다." />
    </>
  );
};

export default SignupPasswordInput;
