import React from "react";

const LoginHeaderButton = () => {
  return (
    <button type="button" className="text-[1.2rem] text-dark-gray">
      <img
        src="src/assets/icon-user.svg"
        alt=""
        className="w-full h-[3.2rem] mb-2"
      />
      로그인
    </button>
  );
};

export default LoginHeaderButton;
