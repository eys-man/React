import { RMCardsData } from '../../Types/Types';
import React from 'react';

interface ICardContext {
  show: boolean;
  setShow: (show: boolean) => void;
  id: number;
  setId: (id: number) => void;
  search: string;
  setSearch: (search: string) => void;
  cardsList: RMCardsData;
  setCardsList: (cardsList: RMCardsData) => void;
}

const CardsContext = React.createContext<ICardContext>({
  show: false,
  setShow: () => {},
  id: -1,
  setId: () => {},
  search: '',
  setSearch: () => {},
  cardsList: { info: { count: 0 }, results: [] },
  setCardsList: () => {},
});

export default CardsContext;
