import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { searchReducer, cardsReducer } from './toolkitReducer';

const rootReducer = combineReducers({ searchReducer, cardsReducer });

export const store = configureStore({
  reducer: rootReducer,
});
