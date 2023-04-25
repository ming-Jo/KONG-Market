import React from "react";
import LoginTapButton from "@components/button/LoginTapButton";
import CommonButton from "@components/button/CommonButton";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <section className="flex flex-col mx-auto w-[55rem] relative">
      <h2 className="sr-only">로그인 화면</h2>
      <div className="flex text-main-choco font-medium">
        <LoginTapButton active={true}>구매회원 로그인</LoginTapButton>
        <LoginTapButton active={false}>판매회원 로그인</LoginTapButton>
      </div>
      <form>
        <fieldset className="flex flex-col rounded-b-[1rem] border-r border-l border-b border-main-choco">
          <legend className="sr-only">login form</legend>
          <label htmlFor="userId" className="sr-only">
            아이디
          </label>
          <input
            type="text"
            id="userId"
            placeholder="아이디를 입력하세요"
            className="input-underline"
          />
          <label htmlFor="userPw" className="sr-only">
            비밀번호
          </label>
          <input
            type="password"
            id="userPw"
            placeholder="비밀번호를 입력하세요"
            className="input-underline"
          />
          <CommonButton
            type="button"
            className="w-[48rem] my-[3.6rem] text-[1.8rem] mx-auto"
          >
            로그인
          </CommonButton>
        </fieldset>
      </form>
      <div className="flex items-center gap-10 mx-auto mt-12 text-[1.6rem] relative before:inline-block before:w-[0.1rem] before:h-[1.6rem] before:absolute before:left-[7.2rem] before:bg-current">
        <Link to="/signup">회원가입</Link>
        <Link to="/signup">비밀번호 찾기</Link>
      </div>
    </section>
  );
};

export default LoginForm;
