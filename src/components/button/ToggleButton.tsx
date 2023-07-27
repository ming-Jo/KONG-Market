import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@hooks/hooks';
import { getLoginUserType, setLoginUserType } from '@store/slice/loginSlice';
import { getSignupUserType, setSignupUserType } from '@store/slice/signupSlice';
import UserTypeTapButton from '@components/button/UserTypeTapButton';

const ToggleButton = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const userType = useAppSelector(pathname.includes('login') ? getLoginUserType : getSignupUserType);

  const handleToggleButton = (usertype: string) => {
    if (usertype === 'BUYER') {
      pathname.includes('login') ? dispatch(setLoginUserType(usertype)) : dispatch(setSignupUserType(usertype));
    } else {
      pathname.includes('login') ? dispatch(setLoginUserType(usertype)) : dispatch(setSignupUserType(usertype));
    }
  };

  return (
    <div className="flex font-medium text-main-choco">
      <UserTypeTapButton active={userType === 'BUYER' && true} onclick={() => handleToggleButton('BUYER')}>
        구매회원 {pathname.includes('login') ? '로그인' : '회원가입'}
      </UserTypeTapButton>
      <UserTypeTapButton active={userType === 'SELLER' && true} onclick={() => handleToggleButton('SELLER')}>
        판매회원 {pathname.includes('login') ? '로그인' : '회원가입'}
      </UserTypeTapButton>
    </div>
  );
};

export default ToggleButton;
