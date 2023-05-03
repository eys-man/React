import { FC } from 'react';
import Modal from '../components/Modal/Modal';
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
  const { data, isFetching, isError } = useGetCardsBySearchQuery(searchValue);

  let res: JSX.Element;
  if (isFetching) res = <div>Loading...</div>;
  else if (isError) res = <div>Error!</div>;
  else if (!data) res = <div>No data found...</div>;
  else res = <div></div>;

  return (
    <div>
      <Search />
      {res}
      <div className="cards-container" style={{ width: '100', height: '100' }}>
        {!isFetching && !isError && <CardList {...(data as RMCardsData)} />}
      </div>
      <Modal>
        <FullCard />
      </Modal>
    </div>
  );
};

export default HomePage;
