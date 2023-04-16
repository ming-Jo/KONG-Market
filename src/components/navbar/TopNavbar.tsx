import React from "react";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import LoginButton from "./LoginButton";
import ShoppingCartButton from "./ShoppingCartButton";

const TopNavbar = () => {
  return (
    <div className="flex justify-between items-center px-16 shadow-[0_4px_5px_rgba(0,0,0,0.1)]">
      <Logo />
      <SearchInput />
      <div className="flex gap-[2.6rem] shrink-0">
        <ShoppingCartButton />
        <LoginButton />
      </div>
    </div>
  );
};

export default TopNavbar;
