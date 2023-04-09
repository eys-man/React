import Card from '../Card/Card';
import { CardData, CardsData } from '../../Types/Types';
import './CardList.css';

const CardList = (props: CardsData) => {
  return (
    <div className="card-list">
      {props.data.map((card: CardData) => {
        return <Card key={card._id} {...card} />;
      })}
    </div>
  );
};

export default CardList;
