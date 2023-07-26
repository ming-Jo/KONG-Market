import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@hooks/hooks';
import { fetchLogin, getLoginStatus, getLoginUserType } from '@store/slice/loginSlice';
import ToggleButton from '@components/button/ToggleButton';
import { CommonButton } from '@components/button/CommonButton';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const initialValues = {
    username: '',
    password: '',
  };

  const [formValue, setFormValue] = useState(initialValues);

  const loginType = useAppSelector(getLoginUserType);
  const loginStatus = useAppSelector(getLoginStatus);

  useEffect(() => {
    if (loginStatus === 'failed') {
      console.log('로그인 실패');
    }
    if (loginStatus === 'success') {
      setFormValue(initialValues);
      navigate('/');
    }
  }, [loginStatus]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormValue({ ...formValue, [id]: value });
  };

  const handelOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { username, password } = formValue;
    const userData = {
      username,
      password,
      login_type: loginType,
    };
    dispatch(fetchLogin(userData));
  };

  return (
    <section className="flex flex-col mx-auto w-[55rem] relative">
      <h2 className="sr-only">로그인 화면</h2>
      <ToggleButton />
      <form onSubmit={handelOnSubmit} className="rounded-b-[1rem] border-r border-l border-b border-main-choco">
        <fieldset className="flex flex-col">
          <legend className="sr-only">login form</legend>
          <label htmlFor="username" className="sr-only">
            아이디
          </label>
          <input
            type="text"
            id="username"
            placeholder="아이디"
            className="input-underline"
            onChange={handleOnChange}
            value={formValue.username}
            required
          />
          <label htmlFor="password" className="sr-only">
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호"
            className="input-underline"
            onChange={handleOnChange}
            value={formValue.password}
            required
          />
          <CommonButton type="submit" className="w-[48rem] my-[3.6rem] text-[1.8rem] mx-auto">
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
