import { FC, useEffect, useState } from 'react';
import Modal from '../components/Modal/Modal';
import CardsContext from '../components/CardsContext/CardsContext';
import Search from '../components/Search/Search';
import FullCard from '../components/FullCard/FullCard';
import { CardsData } from 'Types/Types';
import CardList from '../components/CardList/CardList';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';

const baseUrl = `https://api.disneyapi.dev/character`;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const HomePage: FC = () => {
  const searchValue = useAppSelector((state) => state.searchReducer.search);

  const [show, setShow] = useState<boolean>(false);
  const [id, setId] = useState<number>(-1);

  const [cardsList, setCardsList] = useState<CardsData>({
    data: [],
    info: { count: 0 },
  });

  const [search, setSearch] = useState<string>(
    searchValue !== null ? searchValue : ''
  );
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setError(false);
    const requestUrl =
      search === `` ? `${baseUrl}` : `${baseUrl}?name=${search}`;

    fetch(requestUrl, { method: 'GET' })
      .then((response) => {
        if (response.status === 400) throw new Error(`Bad request`);
        else if (response.status === 404) throw new Error(`Not found`);
        return response.json();
      })
      .then((data) => {
        setCardsList(data);
      })
      .then(() => setIsLoaded(true))
      .catch((e) => {
        setError(true);
        alert(e.message);
        setSearch('');
      });
  }, [search, searchValue]);

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
      <p>{}</p>
      <div className="cards-container" style={{ width: '100', height: '100' }}>
        {isLoaded ? <CardList {...cardsList} /> : <p>Loading...</p>}
        {error && <p>Error!</p>}
      </div>
      <Modal>
        <FullCard />
      </Modal>
    </CardsContext.Provider>
  );
};

export default HomePage;
