import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { getLoginUserType, getToken, logout } from "@/store/slice/loginSlice";
import Logo from "@components/button/Logo";
import SearchInput from "@components/input/SearchInput";
import HeaderIconButton from "@components/button/HeaderIconButton";
import { ReactComponent as IconShoppingCart } from "@assets/icon-shopping-cart.svg";
import { ReactComponent as IconUser } from "@assets/icon-user.svg";

const Header = () => {
  const { pathname } = useLocation();

  const AuthToken = useAppSelector(getToken);

  const cartIconColor = pathname.includes("cart") ? "#8c5637" : "#767676";
  const myPageIconColor = pathname.includes("mypage") ? "#8c5637" : "#767676";

  return (
    <header className="shadow-[0_3px_4px_rgba(0,0,0,0.1)] relative z-50">
      <div className="flex justify-between items-center gap-[3rem] max-w-[138rem] px-16 py-[2.2rem] mx-auto">
        <div className="flex items-center">
          <Logo logoSize="small" />
          <SearchInput />
        </div>
        <div className="flex gap-[2.6rem] shrink-0 relative">
          <HeaderIconButton
            to="/cart"
            svg={IconShoppingCart}
            stroke={cartIconColor}
            color={
              pathname.includes("cart") ? "text-main-choco" : "text-dark-gray"
            }
          >
            장바구니
          </HeaderIconButton>
          <HeaderIconButton
            to={AuthToken ? "/mypage" : "/login"}
            svg={IconUser}
            stroke={myPageIconColor}
            color={
              pathname.includes("mypage") ? "text-main-choco" : "text-dark-gray"
            }
          >
            {AuthToken ? "마이페이지" : "로그인"}
          </HeaderIconButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
