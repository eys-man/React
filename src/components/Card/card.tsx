import './Card.css';
import { CardData } from '../../Types/Types';

const Card = (props: CardData): JSX.Element => {
  return (
    <>
      <div
        className="card-wrapper"
        data-testid="card-test"
        onClick={() => alert(`Click! id=${props._id}`)}
      >
        <h3 className="card-title">{props.name}</h3>
        <img
          className="card-image"
          key={props._id}
          src={props.imageUrl}
          alt={props.name}
        />
      </div>
    </>
  );
};

export default Card;
