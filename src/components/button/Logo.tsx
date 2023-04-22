import React from "react";
import logo from "@assets/logo-kong.svg";

interface LogoProps {
  logoSize: "small" | "big";
}

const Logo = ({ ...props }: LogoProps) => {
  return (
    <h1
      className={`${
        props.logoSize === "big" ? "w-[24rem] mx-auto mt-[10rem] mb-[7rem]" : ""
      } shrink-0`}
    >
      <img src={logo} alt="KONG Market 로고 이미지" className="w-full" />
    </h1>
  );
};

export default Logo;
