import React from 'react';

interface ICardContext {
  show: boolean;
  setShow: (show: boolean) => void;
  id: number;
  setId: (id: number) => void;
  search: string;
  setSearch: (search: string) => void;
}

const CardsContext = React.createContext<ICardContext>({
  show: false,
  setShow: () => {},
  id: -1,
  setId: () => {},
  search: '',
  setSearch: () => {},
});

export default CardsContext;
