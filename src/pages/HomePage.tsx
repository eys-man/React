import { FC, useContext, useEffect, useState } from 'react';
import Search from '../components/Search/Search';
import LoaderCardList from '../components/LoaderCardList/LoaderCardList';
import Modal from '../components/Modal/Modal';
import CardsContext from '../components/CardsContext/CardsContext';

const HomePage: FC = () => {
  const [show, setShow] = useState<boolean>(false);
  // alert(`render HomePage`);
  // const value = useContext(CardsContext);

  const handlerSetShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    return () => {};
    // }, [value.show, value.setShow]);
  }, [show, setShow]);

  return (
    <CardsContext.Provider value={{ show: show, setShow: handlerSetShow }}>
      <Modal>
        <div>
          <img
            src="https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg"
            alt=""
          />
        </div>
      </Modal>
      <Search />
      <div className="cards-container" style={{ width: '100', height: '100' }}>
        <LoaderCardList
          url={'https://api.disneyapi.dev/characters'}
          page={1}
          pageSize={50}
          name={``}
        />
      </div>
    </CardsContext.Provider>
  );
};

export default HomePage;
