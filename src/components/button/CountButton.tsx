import React from "react";
import { ReactComponent as MinusSVG } from "@assets/icon-minus-line.svg";
import { ReactComponent as PlusSVG } from "@assets/icon-plus-line.svg";

export const MinusCountButton = () => {
  return (
    <button type="button" className="border-r b-disabled-gray">
      <MinusSVG className="mx-auto" stroke={"#C4C4C4"} />
    </button>
  );
};

export const PlusCountButton = () => {
  return (
    <button type="button" className="border-l b-disabled-gray">
      <PlusSVG className="mx-auto" stroke={"#C4C4C4"} />
    </button>
  );
};
