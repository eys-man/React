import { configureStore } from '@reduxjs/toolkit';

import searchReducer from './Reducers/searchSlice';
import formReducer from './Reducers/formSlice';
import { rmApi } from './Reducers/apiSlice';

export const store = configureStore({
  reducer: {
    searchReducer,
    formReducer,
    [rmApi.reducerPath]: rmApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(rmApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
