export type RMCardData = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type RMCardsData = {
  info: {
    count: number;
    pages?: number;
    next?: string;
    prev?: string;
  };
  results: RMCardData[];
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
