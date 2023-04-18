import './Card.css';
import { RMCardData } from '../../Types/Types';
import { useContext } from 'react';
import CardsContext from '../CardsContext/CardsContext';

const Card = (props: RMCardData): JSX.Element => {
  const value = useContext(CardsContext);
  return (
    <>
      <div
        className="card-wrapper"
        data-testid="card-test"
        onClick={() => {
          value.setId(props.id);
          value.setShow(true);
        }}
      >
        <h3 className="card-title">{props.name}</h3>
        <img
          className="card-image"
          key={props.id}
          src={props.image}
          alt={props.name}
        />
      </div>
    </>
  );
};

export default Card;
