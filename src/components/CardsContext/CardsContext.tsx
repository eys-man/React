import React from 'react';

interface ICardContext {
  show: boolean;
  setShow: (show: boolean) => void;
  id: number;
  setId: (id: number) => void;
}

const CardsContext = React.createContext<ICardContext>({
  show: false,
  setShow: () => {},
  id: -1,
  setId: () => {},
});

export default CardsContext;
