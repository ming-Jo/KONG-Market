import React from 'react';

interface CheckBoxInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBoxInput = ({ ...props }: CheckBoxInputProps) => {
  return (
    <div className="flex m-14 text-dark-gray">
      <input
        type="checkbox"
        id="agree"
        className="w-6 h-6 m-1 cursor-pointer accent-main-choco"
        onChange={props.onChange}
        required
      />
      <label htmlFor="agree" className="ml-2 leading-8 cursor-pointer">
        KONG Market의 <u className="font-bold">이용약관</u> 및{' '}
        <u className="font-bold">개인정보처리방침</u>에 대한 내용을 확인하였고 동의합니다.
      </label>
    </div>
  );
};

export default CheckBoxInput;
