import { FC, useState } from 'react';
import Modal from '../components/Modal/Modal';
import CardsContext from '../components/CardsContext/CardsContext';
import Search from '../components/Search/Search';
import FullCard from '../components/FullCard/FullCard';
import { RMCardsData } from 'Types/Types';
import CardList from '../components/CardList/CardList';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import { useGetCardsBySearchQuery } from '../Redux/Reducers/apiSlice';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const HomePage: FC = () => {
  const searchValue = useAppSelector((state) => state.searchReducer.search);

  const [show, setShow] = useState<boolean>(false);
  const [id, setId] = useState<number>(-1);

  const [cardsList, setCardsList] = useState<RMCardsData>({
    results: [],
    info: { count: 0 },
  });

  const [search, setSearch] = useState<string>(searchValue);

  const { data, isFetching, isError } = useGetCardsBySearchQuery(searchValue);

  let res: JSX.Element;
  if (isFetching) res = <p>Loading...</p>;
  else if (isError) res = <p>Error!</p>;
  else if (!data) res = <p>No data found...</p>;
  else res = <p></p>;

  return (
    <CardsContext.Provider
      value={{
        show,
        setShow,
        id,
        setId,
        search,
        setSearch,
        cardsList,
        setCardsList,
      }}
    >
      <Search />
      {res}
      <div className="cards-container" style={{ width: '100', height: '100' }}>
        {!isFetching && !isError && <CardList {...(data as RMCardsData)} />}
      </div>
      <Modal>
        <FullCard />
      </Modal>
    </CardsContext.Provider>
  );
};

export default HomePage;
