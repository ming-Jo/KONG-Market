import React from "react";
import { CommonInput } from "@components/input/CommonInput";

const PhoneInput = () => {
  return (
    <div className="w-[47rem] mt-5">
      <label htmlFor="userPhone" className="text-dark-gray">
        휴대폰 번호
      </label>
      <div className="flex gap-[1.2rem] mt-4">
        <CommonInput
          type="text"
          defaultValue="010"
          name="phone1"
          className="flex-grow min-w-0 text-center basis-0"
        />
        <CommonInput
          type="text"
          id="userPhone"
          name="phone2"
          className="flex-grow min-w-0 text-center basis-0"
        />
        <CommonInput
          type="text"
          name="phone3"
          className="flex-grow min-w-0 text-center basis-0"
        />
      </div>
    </div>
  );
};

export default PhoneInput;
