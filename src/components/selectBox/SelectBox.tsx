import React from 'react';

interface SelectItemProps {
  children?: React.ReactNode;
  emailValue?: String;
  onclick?: React.MouseEventHandler;
}

interface SelectBoxProps {
  selectItemList: string[];
  onclick: React.MouseEventHandler;
  refCurrent?: React.RefObject<HTMLUListElement>;
}

const SelectItem = ({ ...props }: SelectItemProps) => {
  return (
    <li>
      <button
        type="button"
        className="w-full px-12 py-5 text-left hover:bg-light-choco"
        onClick={props.onclick}
      >
        {props.children}
      </button>
    </li>
  );
};

const SelectBox = ({ selectItemList, ...props }: SelectBoxProps) => {
  return (
    <ul
      ref={props.refCurrent}
      className="gray-scroll absolute top-[6rem] w-full max-h-[15rem] overflow-y-scroll bg-white border border-dark-gray rounded-[0.5rem] shadow-[0_0_3px_0_rgba(0,0,0,0.2)]"
    >
      {selectItemList.map((item: string, index: number) => (
        <SelectItem key={index} onclick={props.onclick}>
          {item}
        </SelectItem>
      ))}
    </ul>
  );
};

export default SelectBox;
