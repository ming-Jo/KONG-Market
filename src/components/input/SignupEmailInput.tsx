import { useState } from 'react';
import { CommonInput } from '@components/input/CommonInput';
import iconUpArrow from '@assets/icon-up-arrow.svg';
import iconDownArrow from '@assets/icon-down-arrow.svg';

interface DomainListItemProps {
  children: React.ReactNode;
  emailValue?: String;
  onClick?: React.MouseEventHandler;
}

const DomainListItem = ({ ...props }: DomainListItemProps) => {
  return (
    <li>
      <button type="button" className="w-full px-12 py-4 text-left hover:bg-light-choco" onClick={props.onClick}>
        {props.children}
      </button>
    </li>
  );
};

const DomainListUl = ({ ...props }) => {
  return (
    <ul className="gray-scroll absolute top-[6rem] w-full max-h-[15rem] overflow-y-scroll bg-white border border-dark-gray rounded-[0.5rem] shadow-[0_0_3px_0_rgba(0,0,0,0.2)]">
      <DomainListItem children="google.com" onClick={props.handleEmailValue} />
      <DomainListItem children="naver.com" onClick={props.handleEmailValue} />
      <DomainListItem children="daum.net" onClick={props.handleEmailValue} />
      <DomainListItem children="nate.com" onClick={props.handleEmailValue} />
    </ul>
  );
};

const EmailInput = () => {
  const [toggle, setToggle] = useState(false);
  const [emailValue, setEmailValue] = useState('');

  const handleEmailValue = (event: React.MouseEvent) => {
    const value = event.currentTarget.textContent;
    if (value !== null) {
      setEmailValue(value);
      setToggle(false);
    }
  };

  const handleBtnToggle = () => {
    !toggle ? setToggle(true) : setToggle(false);
  };

  return (
    <div className="mt-5 text-dark-gray">
      <label htmlFor="userEmail">이메일</label>
      <div className="flex gap-[1.2rem] text-[1.6rem] mt-4 items-center">
        <CommonInput type="text" id="userEmail" name="emailId" className="flex-grow min-w-0 basis-0" />@
        <div className="relative">
          <CommonInput type="text" name="emailDomain" placeholder="example.com" defaultValue={emailValue} />
          <button type="button" onClick={handleBtnToggle} className="absolute top-0 right-0 p-[1.6rem]">
            {toggle ? (
              <img src={iconDownArrow} alt="" className="w-[2.4rem] h-[2.4rem]" />
            ) : (
              <img src={iconUpArrow} alt="" className="w-[2.4rem] h-[2.4rem]" />
            )}
          </button>
          {toggle ? <DomainListUl handleEmailValue={handleEmailValue} /> : null}
        </div>
      </div>
    </div>
  );
};

export default EmailInput;
