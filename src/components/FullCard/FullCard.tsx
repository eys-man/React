import './FullCard.css';
import { CardData } from '../../Types/Types';
import { useContext, useEffect, useState } from 'react';
import CardsContext from '../CardsContext/CardsContext';

const defaultCard: CardData = {
  _id: -1,
  films: [],
  shortFilms: [],
  tvShows: [],
  videoGames: [],
  parkAttractions: [],
  allies: [],
  enemies: [],
  name: '',
  imageUrl: '',
  url: '',
};

const FullCard = (): JSX.Element => {
  const [error, setError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [item, setItem] = useState<CardData>(defaultCard);

  const value = useContext(CardsContext);

  const requestUrl =
    value.id !== -1 ? `https://api.disneyapi.dev/characters/${value.id}` : ``;

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
        <div className="full=card-wrapper" data-testid="card-test">
          <h3 className="full=card-title">{`${item._id}. ${item.name}`}</h3>
          <img
            className="full=card-image"
            src={item.imageUrl}
            alt={item.name}
          />
          <h4 className="full-card-sections">Films:</h4>
          <div className="full=card-list">
            {item.films.map((film, index) => {
              return <p key={index}>{film}</p>;
            })}
          </div>
          <h4 className="full-card-sections">Short films:</h4>
          <div className="full=card-list">
            {item.shortFilms.map((film, index) => {
              return <p key={index}>{film}</p>;
            })}
          </div>
          <h4 className="full-card-sections">TV Shows:</h4>
          <div className="full=card-list">
            {item.tvShows.map((film, index) => {
              return <p key={index}>{film}</p>;
            })}
          </div>
          <h4 className="full-card-sections">VideoGames:</h4>
          <div className="full=card-list">
            {item.videoGames.map((film, index) => {
              return <p key={index}>{film}</p>;
            })}
          </div>
        </div>
      </>
    );
  }
};

export default FullCard;
