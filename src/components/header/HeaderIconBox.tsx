import React, { useRef, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@hooks/hooks';
import { getAuthState, getLoginUserType, getToken, logout } from '@store/slice/loginSlice';
import { modalIsOpenState } from '@store/slice/modalSlice';
import HeaderIconButton from '@components/button/HeaderIconButton';
import ArrowModal from '@components/modal/ArrowModal';
import { ReactComponent as IconShoppingCart } from '@assets/icon-shopping-cart.svg';
import { ReactComponent as IconUser } from '@assets/icon-user.svg';
// import Modal from '@components/modal/Modal';

const HeaderIconBox = () => {
  const [modal, setModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const AuthToken = useAppSelector(getToken);
  const { userName } = useAppSelector(getAuthState);
  const ModalState = useAppSelector(modalIsOpenState);
  // const UserType = useAppSelector(getLoginUserType);

  const handleLogout = () => {
    setModal(false);
    dispatch(logout());
    navigate('/');
  };

  const arrowModalList = [
    { value: '마이페이지', onClick: () => navigate('/mypage') },
    { value: '로그아웃', onClick: () => handleLogout() },
  ];

  const cartIconColor = pathname.includes('cart') ? '#8c5637' : '#1C1C1C';
  const myPageIconColor = pathname.includes('mypage') ? '#8c5637' : '#1C1C1C';

  // const openLoginModal = <Modal>로그인이 필요한 서비스 입니다. {'\n'} 로그인 하시겠습니까?</Modal>;

  // ArrowModal focus out 시 모달 OFF
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setModal(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex gap-1 shrink-0">
      <HeaderIconButton
        onClick={AuthToken ? () => navigate('/cart') : undefined}
        svg={IconShoppingCart}
        stroke={cartIconColor}
      />
      <HeaderIconButton
        onClick={AuthToken ? () => setModal(!modal) : () => navigate('/login')}
        svg={IconUser}
        stroke={myPageIconColor}
        className="flex items-center justify-center gap-4 pl-8"
      >
        <small className="block text-[1.4rem] text-dark-gray px-5 shrink-0 rounded-[5rem] outline outline-4 outline-light-gray h-full leading-[2.6rem]">
          {AuthToken ? userName : '로그인'}
        </small>
      </HeaderIconButton>
      <ArrowModal on={modal} list={arrowModalList} refCurrent={modalRef} />
    </div>
  );
};

export default HeaderIconBox;
