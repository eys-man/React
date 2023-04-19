import './FullCard.css';
import { useContext } from 'react';
import CardsContext from '../CardsContext/CardsContext';
import { useGetCardByIdQuery } from '../../Redux/Reducers/apiSlice';

const FullCard = (): JSX.Element => {
  const value = useContext(CardsContext);
  const { data, isFetching } = useGetCardByIdQuery(value.id);

  if (isFetching) return <p>Loading...</p>;
  else if (!data) return <p>No data found...</p>;

  return (
    <>
      <div className="full-card-wrapper" data-testid="card-test">
        <h3 className="full-card-title">{`${data.id}. ${data.name}`}</h3>
        <img className="full-card-image" src={data.image} alt={data.name} />
        <h4>Status: {data.status}</h4>
        <h4>Species: {data.species}</h4>
        <h4>Type: {data.type}</h4>
        <h4>Gender: {data.gender}</h4>
        <ul className="full-card-sections">
          Episodes:
          <div className="full-card-list">
            {data.episode.map((ep, index) => {
              return <li key={index}>{ep}</li>;
            })}
          </div>
        </ul>
      </div>
    </>
  );
};

export default FullCard;
