import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ISearchState {
  search: string;
}

const initialState: ISearchState = {
  search: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { setQuery } = searchSlice.actions;
export default searchSlice.reducer;
