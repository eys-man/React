import { FC, useContext, useEffect, useState } from 'react';
import Search from '../components/Search/Search';
import LoaderCardList from '../components/LoaderCardList/LoaderCardList';
import Modal from '../components/Modal/Modal';

const HomePage: FC = () => {
  const [show, setShow] = useState(true);
  // alert(`render HomePage`);

  // const handlerSetShow = () => {
  //   // alert(`handlerSetShow из HomePage`);
  //   setShow(false);
  // };

  // useEffect(() => {
  //   return () => {};
  // }, [show, setShow]);

  return (
    <div>
      <Modal show={show} setShow={() => setShow(false)}>
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
          setShow={setShow}
          url={'https://api.disneyapi.dev/characters'}
          page={1}
          pageSize={50}
          name={``}
        />
      </div>
    </div>
  );
};

export default HomePage;
