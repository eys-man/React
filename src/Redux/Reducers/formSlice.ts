import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IFormListState {
  formCardsList: IFormCardData[];
}

interface IFormCardData {
  name: string;
  date: string;
  city: string;
  gender: string;
  file?: FileList;
  filePath?: string;
  agree: boolean;
}

const initialState: IFormListState = {
  formCardsList: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormCardList(state, action: PayloadAction<IFormCardData>) {
      state.formCardsList.push(action.payload);
    },
  },
});

export const { setFormCardList } = formSlice.actions;
export default formSlice.reducer;
