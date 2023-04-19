import FormCard from '../FormCard/FormCard';
import { FormCardsProps, FormCardData } from 'Types/Types';

const FormCardList = (props: FormCardsProps) => {
  return (
    <>
      {props.cardData.map((cards: FormCardData, index) => {
        return <FormCard key={index} {...cards} />;
      })}
    </>
  );
};

export default FormCardList;
