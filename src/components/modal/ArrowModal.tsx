import React from "react";

interface ArrowModalProps {
  on: boolean;
  list: { value: string; onClick: () => void }[];
}

const ArrowModal = ({ on, list }: ArrowModalProps) => {
  return (
    <div
      className={`absolute text-center bg-white border rounded-2xl w-fit top-[7.5rem] -right-[3rem] border-disabled-gray text-dark-gray shadow-md before:absolute before:w-0 before:h-0 before:border-l-[1.2rem] before:border-r-[1.2rem] before:border-b-[1.2rem] before:border-t-0 before:border-transparent before:border-b-disabled-gray before:-top-[1.2rem] before:right-[4.5rem] ${
        on ? "block" : "hidden"
      }`}
    >
      <div className="p-5 before:absolute before:w-0 before:h-0 before:border-l-[1.2rem] before:border-r-[1.2rem] before:border-b-[1.2rem] before:border-t-0 before:border-transparent before:border-b-white before:-top-[1.05rem] before:right-[4.5rem]">
        {list.map((item, index) => {
          return (
            <button
              key={index}
              type="button"
              onClick={item.onClick}
              className="w-full py-4 border border-white rounded-2xl hover:border hover:border-main-choco hover:text-main-choco hover:bg-light-choco"
            >
              {item.value}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ArrowModal;
