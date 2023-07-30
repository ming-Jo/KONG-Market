import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@hooks/hooks';
import limitLength from '@utils/limitLength';
import { idRegExp } from '@utils/regExp';
import { fetchValidUserName, getSignupState, resetAll, resetName } from '@store/slice/signupSlice';
import { CommonButton } from '@components/button/CommonButton';
import { CommonLabelInput } from '@components/input/CommonInput';
import { InputWithButton, PasswordInput, PhoneInput } from '@components/input/SignupInput';
import EmailInput from '@components/input/SignupEmailInput';
import ToggleButton from '@components/button/ToggleButton';

const SignupForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { registerStatus, error, userType, nameStatus, nameMessage, companyNumberStatus, companyNumberMessage } =
    useAppSelector(getSignupState);

  const initialFormValues = {
    username: '',
    password: '',
    passwordConfirm: '',
    name: '',
    phone1: '010',
    phone2: '',
    phone3: '',
    email1: '',
    email2: '',
    checkBox: false,
  };

  const initialErrorValues = {
    username: '',
    password: '',
    passwordConfirm: '',
    name: '',
    phone: '',
    email: '',
    companyNumber: '',
  };

  const initialSellerValues = {
    companyNumber: '',
    storeName: '',
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [errorValues, setErrorValues] = useState(initialErrorValues);
  const [sellerValues, setSellerValues] = useState(initialSellerValues);
  const [onUserNameValidButton, setOnUserNameValidButton] = useState(false);
  const [onCompanyNumberValidButton, setOnCompanyNumberValidButton] = useState(false);

  useEffect(() => {
    if (registerStatus === 'success') {
      alert('회원가입 완료');
      dispatch(resetAll());
      navigate('/login');
    } else if (registerStatus === 'failed') {
      alert(error);
    }
  }, [registerStatus]);

  // 아이디 중복체크
  const checkUserNameValid = (username: string) => {
    dispatch(fetchValidUserName(username));
    console.log('click', nameMessage, errorValues.username);
  };

  // 아이디
  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (nameStatus !== 'nothing') dispatch(resetName());
    else {
      const { name, value } = event.target;
      const newValue = limitLength(value, 20);
      const message = '아이디는 3-20자 이내의 영어 소문자, 대문자, 숫자만 가능합니다.';
      const error = newValue.match(idRegExp) ? '' : message;
      setFormValues({ ...formValues, [name]: newValue });
      setErrorValues({ ...errorValues, [name]: error });
      error ? setOnUserNameValidButton(false) : setOnUserNameValidButton(true);
    }
  };

  // 비밀번호
  const onChangePassword = () => {};

  // 비밀번호 재확인
  const confirmPassword = () => {};

  // 이름
  const onChangeName = () => {};

  // 휴대폰 번호
  const onChangePhoneNumber = () => {};

  // 이메일
  const onChangeEmail = () => {};

  const selectEmail = () => {};

  // 사업자등록번호 검증
  const checkCompanyNumberValid = () => {};

  const onChangeCompanyNumber = () => {};

  // 스토어 이름
  const onChangeStoreName = () => {};

  // 약관동의 체크
  const onChangeCheckBox = () => {};

  // 회원가입 폼 제출
  const onSubmitForm = () => {};

  return (
    <section className="flex flex-col mx-auto w-[55rem] mb-[10rem]">
      <h2 className="sr-only">회원가입 화면</h2>
      <ToggleButton />
      <form onSubmit={onSubmitForm} className="flex flex-col items-center">
        <fieldset className="flex flex-col p-[3.8rem] border-l border-r border-b border-main-choco rounded-b-[1rem]">
          <legend className="sr-only">회원가입 양식</legend>
          <InputWithButton
            label="아이디"
            name="username"
            onchange={onChangeUsername}
            onClick={checkUserNameValid}
            buttonValue="중복확인"
            onbutton={onUserNameValidButton}
            inputValue={formValues.username}
            error={nameMessage || errorValues.username}
          />
          <PasswordInput />
          <CommonLabelInput label="이름" name="name" type="text" labelClassName="pt-10" />
          <PhoneInput />
          <EmailInput />
          {userType === 'SELLER' && (
            <>
              <InputWithButton
                label="사업자등록번호"
                name="companyNumber"
                onchange={onChangeCompanyNumber}
                onClick={checkCompanyNumberValid}
                buttonValue="인증"
                onbutton={onCompanyNumberValidButton}
                inputValue={sellerValues.companyNumber}
              />
              <CommonLabelInput label="스토어 이름" name="storeName" type="text" />
            </>
          )}
        </fieldset>
        <div className="flex m-14 text-dark-gray">
          <input type="checkbox" id="agree" className="w-6 h-6 m-1 cursor-pointer accent-main-choco" />
          <label htmlFor="agree" className="ml-2 leading-8 cursor-pointer">
            KONG Market의 <u className="font-bold">이용약관</u> 및 <u className="font-bold">개인정보처리방침</u>에 대한
            내용을 확인하였고 동의합니다.
          </label>
        </div>
        <CommonButton type="submit" disabled className="w-[48rem] text-[1.8rem]">
          가입하기
        </CommonButton>
      </form>
    </section>
  );
};

export default SignupForm;
