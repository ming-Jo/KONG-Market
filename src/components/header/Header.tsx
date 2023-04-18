import React from "react";
import Logo from "@components/button/Logo";
import SearchInput from "@components/input/SearchInput";
import LoginHeaderButton from "@components/button/LoginHeaderButton";
import ShoppingCartButton from "@components/button/ShoppingCartButton";

const Header = () => {
  return (
    <header className="shadow-[0_4px_5px_rgba(0,0,0,0.1)]">
      <div className="flex justify-between items-center gap-[3rem] max-w-[138rem] px-16 py-[2.2rem] mx-auto">
        <div className="flex items-center">
          <Logo />
          <SearchInput />
        </div>
        <div className="flex gap-[2.6rem] shrink-0">
          <ShoppingCartButton />
          <LoginHeaderButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
