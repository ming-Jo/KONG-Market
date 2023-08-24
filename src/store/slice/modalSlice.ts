import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@store/store';

interface ModalProps {
  isOpen: boolean;
  content: string;
}

const initialState: ModalProps = {
  isOpen: false,
  content: '',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    resetModal: () => initialState,
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const modalIsOpenState = (state: RootState) => state.modal.isOpen;
export const { openModal, closeModal } = modalSlice.actions;
