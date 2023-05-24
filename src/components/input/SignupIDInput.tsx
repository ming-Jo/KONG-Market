import React from "react";
import { CommonInput, InvalidSpan } from "@components/input/CommonInput";
import { CommonButton } from "@components/button/CommonButton";

const SignupIDInput = () => {
  return (
    <>
      <label htmlFor="userId" className="mb-4 text-dark-gray">
        아이디
      </label>
      <div className="flex">
        <CommonInput type="text" id="userId" required />
        <CommonButton type="button" disabled className="w-4/12 ml-5">
          중복확인
        </CommonButton>
      </div>
      <InvalidSpan
        children="아이디는 3-20자 이내의 영어 소문자, 대문자, 숫자만 가능합니다."
        className="shrink-0"
      />
    </>
  );
};

export default SignupIDInput;
