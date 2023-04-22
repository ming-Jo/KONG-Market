import React from "react";

interface LoginInputProps {
  type?: string;
}

const LoginForm = () => {
  return (
    <section>
      <h2 className="sr-only">로그인 화면</h2>
      <div>
        <button type="button" className="btn-login-tap">
          구매회원 로그인
        </button>
        <button type="button" className="btn-login-tap">
          판매회원 로그인
        </button>
      </div>
      <form>
        <fieldset className="flex flex-col">
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
        </fieldset>
      </form>
    </section>
  );
};

export default LoginForm;
