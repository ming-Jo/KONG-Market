import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@store/store';

interface ModalProps {
  isOpen: boolean;
  content: string;
  buttonValue: {
    yes: string;
    no: string;
  };
}

const initialState: ModalProps = {
  isOpen: false,
  content: '',
  buttonValue: {
    yes: '예',
    no: '아니오',
  },
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
      // if (action.payload === "예") {
      //   state.buttonValue;
      // }
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const modalIsOpenState = (state: RootState) => state.modal.isOpen;
