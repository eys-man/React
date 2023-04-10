import React from 'react';

interface ICardContext {
  show: boolean;
  setShow: (show: boolean) => void;
}

const CardsContext = React.createContext<ICardContext>({
  show: false,
  setShow: () => {},
});

export default CardsContext;
