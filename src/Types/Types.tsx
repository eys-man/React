// export type CardData = {
//   id: number;
//   image: string;
//   title: string;
//   description: string;
// };

export type CardData = {
  _id: number;
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  videoGames: string[];
  parkAttractions: string[];
  allies: string[];
  enemies: string[];
  sourceUrl: string;
  name: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  url: string;
  __v: number;
};

export type CardsData = {
  data: CardData[];
  count?: number;
  previousPage?: string;
  nextPage?: string;
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

export type ModalType = {
  active: boolean;
  setActive: ModalActivityCallback;
  // children: JSX.Element;
  // content: JSX.Element;
  // setContent: ModalContentCallback;
};

export type ModalActivityCallback = (active: boolean) => void;
export type ModalContentCallback = (content: JSX.Element) => JSX.Element;
