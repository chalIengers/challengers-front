import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

type InitialState = {
  modalType: string;
  isOpen: boolean;
};

const initialState: InitialState = {
  modalType: '',
  isOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    /**
     * dispatch(openModal({modalType: "모달이름"}))
     */
    openModal: (state, actions) => {
      const { modalType } = actions.payload;
      return { ...state, modalType, isOpen: true };
    },
    /**
     * dispatch(closeModal())
     */
    closeModal: (state) => {
      return { ...state, isOpen: false };
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const selectModal = (state: RootState): InitialState => state.modal;

export default modalSlice.reducer;
