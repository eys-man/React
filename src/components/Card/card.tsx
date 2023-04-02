import './Card.css';
import { CardData } from '../../Types/Types';

const Card = (props: CardData): JSX.Element => {
  return (
    <div className="card-wrapper" data-testid="card-test">
      <h3 className="card-title">
        <b>{props.id}</b>. {props.title}
      </h3>
      <img
        className="card-image"
        key={props.id}
        src={props.image}
        alt={props.title}
      />
      <p className="card-description">{props.description}</p>
    </div>
  );
};

export default Card;
