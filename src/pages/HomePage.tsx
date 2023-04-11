import { FC, useEffect, useState } from 'react';
import LoaderCardList from '../components/LoaderCardList/LoaderCardList';
import Modal from '../components/Modal/Modal';
import CardsContext from '../components/CardsContext/CardsContext';
import Search from '../components/Search/Search';
import FullCard from '../components/FullCard/FullCard';

const HomePage: FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [id, setId] = useState<number>(-1);
  const [search, setSearch] = useState<string>('');

  const handlerSetShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    return () => {};
  }, [show, setShow, search, setSearch]);

  return (
    <CardsContext.Provider
      value={{
        show: show,
        setShow: handlerSetShow,
        id: id,
        setId: setId,
        search: search,
        setSearch: setSearch,
      }}
    >
      <Search />
      <div className="cards-container" style={{ width: '100', height: '100' }}>
        <LoaderCardList page={1} pageSize={50} />
      </div>
      <Modal>
        <FullCard />
      </Modal>
    </CardsContext.Provider>
  );
};

export default HomePage;
