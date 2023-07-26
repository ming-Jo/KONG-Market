import React from 'react';

interface ArrowModalProps {
  on: boolean;
  list: { value: string; onClick: () => void }[];
  refCurrent: React.RefObject<HTMLDivElement>;
}

const ArrowModal = ({ on, list, refCurrent }: ArrowModalProps) => {
  return (
    <div
      className={`absolute text-center bg-white border rounded-2xl w-[13rem] top-[5.8rem] right-[0.2rem] border-light-gray text-dark-gray shadow-small before:absolute before:w-0 before:h-0 before:border-l-[1.2rem] before:border-r-[1.2rem] before:border-b-[1.2rem] before:border-t-0 before:border-transparent before:border-b-light-gray before:-top-[1.2rem] before:right-[4.5rem] ${
        on ? 'block' : 'hidden'
      }`}
      ref={refCurrent}
    >
      <div className="p-3 before:absolute before:w-0 before:h-0 before:border-l-[1.2rem] before:border-r-[1.2rem] before:border-b-[1.2rem] before:border-t-0 before:border-transparent before:border-b-white before:-top-[1.05rem] before:right-[4.5rem]">
        {list.map((item, index) => {
          return (
            <button
              key={index}
              type="button"
              onClick={item.onClick}
              className="w-full py-3 border border-white rounded-2xl text-[1.4rem] hover:border hover:border-main-choco hover:text-main-choco hover:bg-light-choco"
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
