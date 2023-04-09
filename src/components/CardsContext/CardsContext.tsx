import React from 'react';

const CardsContext = React.createContext({
  show: false,
  setShow: function (newShow: boolean) {
    this.show = newShow;
  },
  url: 'https://api.disneyapi.dev/characters',
  setUrl: function (newUrl: string) {
    this.url = newUrl;
  },
});

export default CardsContext;
