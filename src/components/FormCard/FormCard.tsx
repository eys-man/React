import './FormCard.css';
import { FormCardData } from '../../Types/Types';

const FormCard = (card: FormCardData) => {
  return (
    <div className="form-card" data-testid="form-card-test">
      <h3>Name: {card.name}</h3>
      <p>Birthday: {card.date}</p>
      <p>City: {card.city}</p>
      <p>Gender: {card.gender}</p>
      <img src={card.filePath} />
    </div>
  );
};

export default FormCard;
