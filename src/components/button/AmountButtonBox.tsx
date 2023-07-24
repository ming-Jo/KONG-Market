import React from "react";
import {
  MinusCountButton,
  PlusCountButton,
} from "@components/button/CountButton";

const AmountButtonBox = () => {
  return (
    <div className="grid grid-cols-3 w-[15rem] border b-disabled-gray rounded-lg">
      <MinusCountButton />
      <span className="text-center text-[1.8rem] leading-[5rem]">1</span>
      <PlusCountButton />
    </div>
  );
};

export default AmountButtonBox;
