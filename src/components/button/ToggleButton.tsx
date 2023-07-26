import React from 'react';
import LoginTapButton from './LoginTapButton';

const ToggleButton = () => {
  return (
    <div className="flex font-medium text-main-choco">
      <LoginTapButton active={true}>구매회원 로그인</LoginTapButton>
      <LoginTapButton active={false}>판매회원 로그인</LoginTapButton>
    </div>
  );
};

export default ToggleButton;
