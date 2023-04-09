import { FC } from 'react';
import Search from '../components/Search/Search';
import LoaderCardList from '../components/LoaderCardList/LoaderCardList';

const HomePage: FC = () => {
  return (
    <div>
      <Search />
      <div className="cards-container" style={{ width: '100', height: '100' }}>
        <LoaderCardList
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
