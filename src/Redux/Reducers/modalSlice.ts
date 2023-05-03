import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IModalState {
  modal: {
    isShowModal: boolean;
    id?: number;
  };
}

const initialState: IModalState = {
  modal: {
    isShowModal: false,
    id: -1,
  },
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setShowModal(state, action: PayloadAction<IModalState>) {
      state.modal.isShowModal = action.payload.modal.isShowModal;
      state.modal.id = action.payload.modal.id;
    },
  },
});

export const { setShowModal } = modalSlice.actions;
export default modalSlice.reducer;
