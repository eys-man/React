import { FC, useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import Form from '../components/Form/Form';
import { FormCardData } from '../Types/Types';
import FormCardList from '../components/FormCardList/FormCardList';
import { AppDispatch, RootState } from 'Redux/store';
import { setFormCardList } from '../Redux/Reducers/formSlice';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

const FormPage: FC = () => {
  const { formCardsList } = useAppSelector((state) => state.formReducer);
  const [cardList, setCardList] = useState<FormCardData[]>(formCardsList);
  const dispatch = useAppDispatch();

  const handleChange = (value: FormCardData) => {
    dispatch(setFormCardList(value));
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
