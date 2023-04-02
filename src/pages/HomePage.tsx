import { FC } from 'react';
import Search from '../components/Search/Search';
import CardList from '../components/CardList/CardList';
import cardData from '../mock/mock';

const HomePage: FC = () => {
  return (
    <div>
      <Search />
      <div className="cards-container">
        <CardList cardData={cardData} />
      </div>
    </div>
  );
};

export default HomePage;
