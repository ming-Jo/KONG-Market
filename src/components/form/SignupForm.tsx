import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@hooks/hooks';
import limitLength from '@utils/limitLength';
import {
  email1RegExp,
  email2RegExp,
  idRegExp,
  nameRegExp,
  passwordRegExp,
  phoneRegExp,
} from '@utils/regExp';
import {
  RegisterData,
  fetchSignUp,
  fetchValidCompanyNumber,
  fetchValidUserName,
  getSignupState,
  resetAll,
  resetCompany,
  resetName,
} from '@store/slice/signupSlice';
import { CommonButton } from '@components/button/CommonButton';
import { CommonLabelInput } from '@components/input/CommonInput';
import { InputWithButton, PasswordInput, PhoneInput } from '@components/input/SignupInput';
import EmailInput from '@components/input/SignupEmailInput';
import ToggleButton from '@components/button/ToggleButton';
import CheckBoxInput from '@components/input/CheckBoxInput';

const SignupForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    registerStatus,
    error,
    userType,
    nameStatus,
    nameMessage,
    companyNumberStatus,
    companyNumberMessage,
  } = useAppSelector(getSignupState);

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
  const [valid, setValid] = useState(false);

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
  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newValue = limitLength(value, 20);
    const message = '비밀번호는 영문, 숫자 조합 8-20자리를 입력해주세요.';
    const error = newValue.match(passwordRegExp) ? '' : message;
    setFormValues({ ...formValues, [name]: newValue });
    setErrorValues({ ...errorValues, [name]: error });
    if (formValues.passwordConfirm && value !== formValues.passwordConfirm) {
      setErrorValues({ ...errorValues, ['passwordConfirm']: '비밀번호가 일치하지 않습니다.' });
    }
  };

  // 비밀번호 재확인
  const confirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newValue = limitLength(value, 20);
    const message = value && (value === formValues.password ? '' : '비밀번호가 일치하지 않습니다.');
    setFormValues({ ...formValues, [name]: newValue });
    setErrorValues({ ...errorValues, [name]: message });
  };

  // 이름
  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newValue = limitLength(value, 10);
    setFormValues({ ...formValues, [name]: newValue });
    const message = '이름은 한글 혹은 영어로 2 - 10자리까지 가능합니다.';
    const error = newValue.match(nameRegExp) ? '사용 가능한 이름입니다.' : message;
    setErrorValues({ ...errorValues, [name]: error });
    newValue.match(nameRegExp) ? setValid(true) : setValid(false);
  };

  // 휴대폰 번호
  const onChangePhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newValue = limitLength(value, 4);
    const message = '숫자만 입력할 수 있습니다.';
    const error = newValue.match(phoneRegExp) ? '' : message;
    setFormValues({ ...formValues, [name]: newValue });
    setErrorValues({ ...errorValues, ['phone']: error });
  };

  // 이메일
  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const message = '이메일 형식을 확인해주세요.';
    const regExp = name === 'email1' ? email1RegExp : email2RegExp;
    const error = value.match(regExp) ? '' : message;
    setFormValues({ ...formValues, [name]: value });
    setErrorValues({ ...errorValues, ['email']: error });
  };

  // 사업자등록번호 검증
  const checkCompanyNumberValid = (num: string) => {
    dispatch(fetchValidCompanyNumber(num));
  };

  const onChangeCompanyNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (companyNumberStatus !== 'nothing') dispatch(resetCompany());
    else {
      const { name, value } = event.target;
      const newValue = limitLength(value, 10).replace(/[^0-9]/g, '');
      const message = '사업자등록번호는 숫자 10자리로 이루어져 있어야 합니다.';
      setSellerValues({ ...sellerValues, [name]: newValue });
      if (newValue.length > 0 && newValue.length < 10) {
        setErrorValues({ ...errorValues, [name]: message });
        setOnCompanyNumberValidButton(false);
      } else if (newValue.length === 0) {
        setErrorValues({ ...errorValues, [name]: '' });
        setOnCompanyNumberValidButton(false);
      } else {
        setErrorValues({ ...errorValues, [name]: '' });
        setOnCompanyNumberValidButton(true);
      }
    }
  };

  // 스토어 이름
  const onChangeStoreName = () => {};

  // 약관동의 체크
  const onChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, ['checkBox']: event.target.checked });
  };

  const { username, password, passwordConfirm, name, phone1, phone2, phone3, email1, email2 } =
    formValues;

  // 회원가입 폼 제출
  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (nameStatus !== 'success') {
      alert('아이디 인증을 완료해주세요.');
    }

    let userData: RegisterData = {
      username,
      password,
      password2: passwordConfirm,
      name,
      phone_number: `${phone1}${phone2}${phone3}`,
      email: `${email1}@${email2}`,
    };

    dispatch(fetchSignUp({ userType, userData }));
  };

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
            onChange={onChangeUsername}
            onClick={checkUserNameValid}
            buttonValue="중복확인"
            onbutton={onUserNameValidButton}
            inputValue={formValues.username}
            error={nameMessage || errorValues.username}
            valid={nameStatus === 'success'}
            labelClassName="w-full"
            inputClassName="flex-grow"
          />
          <PasswordInput
            onChange1={onChangePassword}
            onChange2={confirmPassword}
            error1={errorValues.password}
            error2={errorValues.passwordConfirm}
            inputValue1={formValues.password}
            inputValue2={formValues.passwordConfirm}
            valid1={formValues.password.length > 0 && !errorValues.password}
            valid2={formValues.passwordConfirm.length > 0 && !errorValues.passwordConfirm}
          />
          <InputWithButton
            label="이름"
            name="name"
            onChange={onChangeName}
            inputValue={formValues.name}
            error={errorValues.name}
            labelClassName="pt-10"
            inputClassName="w-full"
            valid={valid}
          />
          <PhoneInput
            onChange={onChangePhoneNumber}
            value2={formValues.phone2}
            value3={formValues.phone3}
            error={errorValues.phone}
          />
          <EmailInput
            onChange={onChangeEmail}
            value1={formValues.email1}
            value2={formValues.email2}
            error={errorValues.email}
          />

          {userType === 'SELLER' && (
            <>
              <InputWithButton
                label="사업자등록번호"
                name="companyNumber"
                onChange={onChangeCompanyNumber}
                onClick={checkCompanyNumberValid}
                buttonValue="인증"
                onbutton={onCompanyNumberValidButton}
                inputValue={sellerValues.companyNumber}
                error={companyNumberMessage || errorValues.companyNumber}
                valid={companyNumberStatus === 'success'}
                labelClassName="w-full pt-10"
                inputClassName="flex-grow"
              />
              <CommonLabelInput label="스토어 이름" name="storeName" type="text" />
            </>
          )}
        </fieldset>
        <CheckBoxInput onChange={onChangeCheckBox} />
        <CommonButton
          type="submit"
          disabled={
            !username ||
            !password ||
            !passwordConfirm ||
            !name ||
            (!phone1 && !phone2 && !phone3) ||
            (!email1 && !email2)
          }
          className="w-[48rem] text-[1.8rem]"
        >
          가입하기
        </CommonButton>
      </form>
    </section>
  );
};

export default SignupForm;
