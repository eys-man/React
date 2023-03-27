import React from 'react';
import Search from '../components/search/search';
import CardList from '../components/CardList/cardList';
import cardData from '../mock/mock';

class HomePage extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        <Search />
        <div className="cards-container">
          <CardList cardData={cardData} />
        </div>
      </div>
    );
  }
}

export default HomePage;
