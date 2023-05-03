import {
  PreloadedState,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';

import searchReducer from './Reducers/searchSlice';
import formReducer from './Reducers/formSlice';
import modalReducer from './Reducers/modalSlice';
import { rmApi } from './Reducers/apiSlice';

const rootReducer = combineReducers({
  searchReducer,
  formReducer,
  modalReducer,
  [rmApi.reducerPath]: rmApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleWare) =>
      getDefaultMiddleWare().concat(rmApi.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
