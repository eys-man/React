import './FullCard.css';
import { RMCardData } from '../../Types/Types';
import { useContext, useEffect, useState } from 'react';
import CardsContext from '../CardsContext/CardsContext';

const defaultCard: RMCardData = {
  id: -1,
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  origin: {
    name: '',
    url: '',
  },
  location: {
    name: '',
    url: '',
  },
  image: '',
  episode: [],
  url: '',
  created: '',
};

const FullCard = (): JSX.Element => {
  const [error, setError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [item, setItem] = useState<RMCardData>(defaultCard);

  const value = useContext(CardsContext);

  const requestUrl =
    value.id !== -1
      ? `https://rickandmortyapi.com/api/character/${value.id}`
      : ``;

  useEffect(() => {
    fetch(requestUrl, { method: 'GET' })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItem(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [requestUrl]);

  if (error) {
    return <div>Error loading data!</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className="full-card-wrapper" data-testid="card-test">
          <h3 className="full-card-title">{`${item.id}. ${item.name}`}</h3>
          <img className="full-card-image" src={item.image} alt={item.name} />
          <h4>Status: {item.status}</h4>
          <h4>Species: {item.species}</h4>
          <h4>Type: {item.type}</h4>
          <h4>Gender: {item.gender}</h4>
          <ul className="full-card-sections">
            Episodes:
            <div className="full-card-list">
              {item.episode.map((ep, index) => {
                return <li key={index}>{ep}</li>;
              })}
            </div>
          </ul>
        </div>
      </>
    );
  }
};

export default FullCard;
