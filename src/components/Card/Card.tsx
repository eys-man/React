import './Card.css';
import { RMCardData } from '../../Types/Types';
import { AppDispatch } from '../../Redux/store';
import { useDispatch } from 'react-redux';
import { setShowModal } from '../../Redux/Reducers/modalSlice';

const useAppDispatch = () => useDispatch<AppDispatch>();

const Card = (props: RMCardData): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div
        className="card-wrapper"
        data-testid="card-test"
        onClick={() => {
          dispatch(
            setShowModal({ modal: { isShowModal: true, id: props.id } })
          );
        }}
      >
        <h3 className="card-title">
          {props.id}. {props.name}
        </h3>
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
