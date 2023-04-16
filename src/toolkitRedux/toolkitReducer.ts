import { createAction, createReducer } from '@reduxjs/toolkit';
import { CardsData } from '../Types/Types';

const initState = {
  search: '',
  cards: <CardsData>{
    data: [],
    info: {
      count: 0,
    },
  },
};

const search = createAction<string>('SEARCH');
const cards = createAction<CardsData>('CARDS');

export const searchReducer = createReducer('', (build) => {
  build.addCase(search, (state, buildion) => (state = buildion.payload));
});

export const cardsReducer = createReducer(initState.cards, (build) => {
  build.addCase(cards, (state, buildion) => (state = buildion.payload));
});
