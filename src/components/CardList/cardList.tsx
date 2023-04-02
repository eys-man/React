import Card from '../Card/Card';
import { CardData, CardsProps } from '../../Types/Types';

const CardList = (props: CardsProps) => {
  return (
    <>
      {props.cardData.map((cards: CardData) => {
        return <Card key={cards.id} {...cards} />;
      })}
    </>
  );
};

export default CardList;
