import React from 'react';
import ReactDOM from 'react-dom';
import { useAppDispatch } from '@hooks/hooks';
import { closeModal } from '@store/slice/modalSlice';
import { CommonButton } from '@components/button/CommonButton';
import { useNavigate } from 'react-router-dom';

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleConfirmButton = () => {
    dispatch(closeModal());
    navigate('/login');
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 backdrop-blur-sm">
      <article className="fixed w-1/2 p-20 text-center -translate-x-1/2 -translate-y-1/2 bg-white shadow-md top-1/2 left-1/2 rounded-2xl">
        <h2 className="text-[1.6rem] mb-16">{children}</h2>
        <div className="grid grid-cols-2 gap-5">
          <CommonButton
            onClick={() => dispatch(closeModal())}
            className="bg-white border !text-dark-gray border-disable-gray"
          >
            아니오
          </CommonButton>
          <CommonButton onClick={handleConfirmButton}>예</CommonButton>
        </div>
      </article>
    </div>,
    document.getElementById('portal')!
  );
};

export default Modal;
