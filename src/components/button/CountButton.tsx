import React from "react";
import { ReactComponent as MinusSVG } from "@assets/icon-minus-line.svg";
import { ReactComponent as PlusSVG } from "@assets/icon-plus-line.svg";

interface CountButtonProps {
  disabled: boolean;
  onclick: () => void;
}

export const MinusCountButton = ({ disabled, onclick }: CountButtonProps) => {
  return (
    <button
      type="button"
      onClick={onclick}
      disabled={disabled}
      className="border-r b-disabled-gray"
    >
      <MinusSVG
        className="mx-auto"
        stroke={`${disabled ? "#C4C4C4" : "#767676"}`}
      />
    </button>
  );
};

export const PlusCountButton = ({ disabled, onclick }: CountButtonProps) => {
  return (
    <button
      type="button"
      onClick={onclick}
      disabled={disabled}
      className="border-l b-disabled-gray"
    >
      <PlusSVG
        className="mx-auto"
        stroke={`${disabled ? "#C4C4C4" : "#767676"}`}
      />
    </button>
  );
};
