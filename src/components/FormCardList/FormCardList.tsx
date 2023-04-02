import FormCard from '../FormCard/FormCard';
import { FormCardsProps, FormCardData } from 'types/types';

const FormCardList = (props: FormCardsProps) => {
  return (
    <>
      {props.cardData.map((cards: FormCardData) => {
        return <FormCard key={cards.name} {...cards} />;
      })}
    </>
  );
};

export default FormCardList;
