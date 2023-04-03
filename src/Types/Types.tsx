export type CardData = {
  id: number;
  image: string;
  title: string;
  description: string;
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
