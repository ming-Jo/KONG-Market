import React, { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { getLoginUserType, getToken, logout } from "@store/slice/loginSlice";
import Logo from "@components/button/Logo";
import SearchInput from "@components/input/SearchInput";
import HeaderIconButton from "@components/button/HeaderIconButton";
import { ReactComponent as IconShoppingCart } from "@assets/icon-shopping-cart.svg";
import { ReactComponent as IconUser } from "@assets/icon-user.svg";
import ArrowModal from "@components/modal/ArrowModal";
import { modalIsOpenState } from "@store/slice/modalSlice";

const Header = () => {
  const [modal, setModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const AuthToken = useAppSelector(getToken);
  const ModalState = useAppSelector(modalIsOpenState);
  // const UserType = useAppSelector(getLoginUserType);

  const handleLogout = () => {
    setModal(false);
    dispatch(logout());
    navigate("/");
  };

  const arrowModalList = [
    { value: "마이페이지", onClick: () => navigate("/mypage") },
    { value: "로그아웃", onClick: () => handleLogout() },
  ];

  const cartIconColor = pathname.includes("cart") ? "#8c5637" : "#767676";
  const myPageIconColor = pathname.includes("mypage") ? "#8c5637" : "#767676";

  // ArrowModal focus out 시 모달 OFF
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="shadow-[0_3px_4px_rgba(0,0,0,0.1)] fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex justify-between items-center gap-[3rem] max-w-[138rem] px-16 py-[1.8rem] mx-auto">
        <div className="flex items-center">
          <Logo logoSize="small" />
          <SearchInput />
        </div>
        <div className="flex gap-[2.6rem] shrink-0 relative">
          <HeaderIconButton
            onClick={AuthToken ? () => navigate("/cart") : undefined}
            svg={IconShoppingCart}
            stroke={cartIconColor}
            color={
              pathname.includes("cart") ? "text-main-choco" : "text-dark-gray"
            }
          >
            장바구니
          </HeaderIconButton>
          <HeaderIconButton
            onClick={
              AuthToken ? () => setModal(!modal) : () => navigate("/login")
            }
            svg={IconUser}
            stroke={myPageIconColor}
            color={
              pathname.includes("mypage") ? "text-main-choco" : "text-dark-gray"
            }
          >
            {AuthToken ? "마이페이지" : "로그인"}
          </HeaderIconButton>
          <ArrowModal on={modal} list={arrowModalList} refCurrent={modalRef} />
        </div>
      </div>
    </header>
  );
};

export default Header;
