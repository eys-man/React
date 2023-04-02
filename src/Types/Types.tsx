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
  time: string;
  city: string;
  isAgree: boolean;
  gender: string;
  file: string;
};
