import { configureStore } from '@reduxjs/toolkit';

import searchReducer from './Reducers/searchSlice';
import formReducer from './Reducers/formSlice';

export const store = configureStore({
  reducer: {
    searchReducer,
    formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
