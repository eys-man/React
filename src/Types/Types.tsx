export type CardData = {
  _id: number;
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  videoGames: string[];
  parkAttractions: string[];
  allies: string[];
  enemies: string[];
  sourceUrl?: string;
  name: string;
  imageUrl: string;
  createdAt?: string;
  updatedAt?: string;
  url: string;
  __v?: number;
};

// ввели вместо CardData с 10.04.2023
export type NewCardData = {
  item: {
    _id: number;
    films: string[];
    shortFilms: string[];
    tvShows: string[];
    videoGames: string[];
    parkAttractions: string[];
    allies: string[];
    enemies: string[];
    sourceUrl?: string;
    name: string;
    imageUrl: string;
    createdAt?: string;
    updatedAt?: string;
    url: string;
    __v?: number;
  };
};

export type CardsData = {
  data: CardData[];
  info: {
    count: number;
    totalPages?: number;
    previousPage?: string;
    nextPage?: string;
  };
};

export type CardsProps = {
  cardData: Array<CardData>;
};

export type FormCardData = {
  name: string;
  date: string;
  city: string;
  gender: string;
  file?: FileList;
  filePath?: string;
  agree: boolean;
};

export type FormCardsProps = {
  cardData: Array<FormCardData>;
};
