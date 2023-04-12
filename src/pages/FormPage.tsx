import { FC, useState } from 'react';
import Form from '../components/Form/Form';
import { FormCardData } from 'Types/Types';
import FormCardList from '../components/FormCardList/FormCardList';

const FormPage: FC = () => {
  const [cardList, setCardList] = useState<FormCardData[]>([]);

  const handleChange = (value: FormCardData) => {
    setCardList([...cardList, value]);
  };

  return (
    <>
      <Form onChange={handleChange} />
      <FormCardList cardData={cardList} />
    </>
  );
};

export default FormPage;
