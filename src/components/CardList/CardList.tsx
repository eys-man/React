import Card from '../Card/Card';
import { CardData, CardsData } from '../../Types/Types';
import './CardList.css';

const CardList = (data: CardsData) => {
  // const value = useContext(CardsContext);
  return (
    <div className="card-list">
      {data.data.map((card: CardData) => {
        return <Card key={card._id} {...card} />;
      })}
    </div>
  );
};

export default CardList;
