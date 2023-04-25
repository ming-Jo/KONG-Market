import React from "react";
import logo from "@assets/logo-kong.svg";
import { Link } from "react-router-dom";

interface LogoProps {
  logoSize: "small" | "big";
}

const Logo = ({ ...props }: LogoProps) => {
  return (
    <Link
      to="/"
      className={`${
        props.logoSize === "big" ? "w-[24rem] mx-auto mt-[10rem] mb-[7rem]" : ""
      } shrink-0 block`}
    >
      <img src={logo} alt="KONG Market 로고 이미지" className="w-full" />
    </Link>
  );
};

export default Logo;
