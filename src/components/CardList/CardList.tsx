import Card from '../Card/Card';
import { RMCardData, RMCardsData } from '../../Types/Types';
import './CardList.css';

const CardList = (data: RMCardsData) => {
  // const value = useContext(CardsContext);
  return (
    <div className="card-list">
      {data.results.map((card: RMCardData) => {
        return <Card key={card.id} {...card} />;
      })}
    </div>
  );
};

export default CardList;
