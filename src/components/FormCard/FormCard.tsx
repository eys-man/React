import './FormCard.css';
import { FormCardData } from '../../Types/Types';

const FormCard = (card: FormCardData) => {
  return (
    <div className="form-card" data-testid="form-card-test">
      <h3>{card.name}</h3>
      <p>{card.time}</p>
      <p>{card.city}</p>
      <p>{card.gender}</p>
      <p>{card.file}</p>
      <p>{card.isAgree}</p>
    </div>
  );
};

export default FormCard;
