import React, { Children } from "react";
import { CommonInput } from "@components/input/CommonInput";
import iconUpArrow from "@assets/icon-up-arrow.svg";
import iconDownArrow from "@assets/icon-down-arrow.svg";

interface DomainListItemProps {
  children: React.ReactNode;
}

const DomainListItem = ({ ...props }: DomainListItemProps) => {
  return (
    <li>
      <button
        type="button"
        className="w-full px-12 py-4 text-left hover:bg-light-choco"
      >
        {props.children}
      </button>
    </li>
  );
};

const EmailInput = () => {
  return (
    <div className="w-[47rem] mt-5 text-dark-gray">
      <label htmlFor="userEmail">이메일</label>
      <div className="flex gap-[1.2rem] text-[1.6rem] mt-4 items-center">
        <CommonInput
          type="text"
          id="userEmail"
          name="emailId"
          className="flex-grow min-w-0 basis-0"
        />
        @
        <div className="relative">
          <CommonInput type="text" name="emailDomain" />
          <div className="absolute top-0 right-0 p-[1.6rem] cursor-pointer">
            <img src={iconUpArrow} alt="" className="w-[2.4rem] h-[2.4rem]" />
          </div>
          <ul className="gray-scroll absolute top-[6rem] w-full max-h-[15rem] overflow-y-scroll bg-white border border-dark-gray rounded-[0.5rem] shadow-[0_0_3px_0_rgba(0,0,0,0.2)]">
            <DomainListItem children="google.com" />
            <DomainListItem children="naver.com" />
            <DomainListItem children="daum.net" />
            <DomainListItem children="nate.com" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmailInput;