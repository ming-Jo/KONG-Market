import { useState, useEffect, useRef } from 'react';
import { CommonInput, InvalidSpan } from '@components/input/CommonInput';
import iconUpArrow from '@assets/icon-up-arrow.svg';
import iconDownArrow from '@assets/icon-down-arrow.svg';
import SelectBox from '@components/selectBox/SelectBox';

interface EmailInputProps {
  value1: string;
  value2: string;
  error: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmailInput = ({ ...props }: EmailInputProps) => {
  const domainItemList = ['google.com', 'naver.com', 'daum.net', 'nate.com'];

  const [toggle, setToggle] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const selectBoxRef = useRef<HTMLUListElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectBoxRef.current && !selectBoxRef.current.contains(event.target as Node)) {
        setToggle(false);
      }
    };
    if (toggle) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggle]);

  return (
    <div className="mt-5 text-dark-gray">
      <label htmlFor="email">이메일</label>
      <div className="flex gap-[1.2rem] text-[1.6rem] mt-4 items-center">
        <CommonInput
          type="text"
          id="email"
          name="email1"
          value={props.value1}
          onChange={props.onChange}
          className="flex-grow min-w-0 basis-0"
          autoComplete="off"
        />
        @
        <div className="relative">
          <CommonInput
            type="text"
            name="email2"
            placeholder="example.com"
            value={emailValue ? emailValue : props.value2}
            onChange={props.onChange}
            autoComplete="off"
          />
          <button
            type="button"
            onClick={handleBtnToggle}
            className="absolute top-0 right-0 p-[1.6rem]"
          >
            {toggle ? (
              <img src={iconDownArrow} alt="" className="w-[2.4rem] h-[2.4rem]" />
            ) : (
              <img src={iconUpArrow} alt="" className="w-[2.4rem] h-[2.4rem]" />
            )}
          </button>
          {toggle ? (
            <SelectBox
              refCurrent={selectBoxRef}
              selectItemList={domainItemList}
              onclick={handleEmailValue}
            />
          ) : null}
        </div>
      </div>
      {props.error && <InvalidSpan className="shrink-0">{props.error}</InvalidSpan>}
    </div>
  );
};

export default EmailInput;
