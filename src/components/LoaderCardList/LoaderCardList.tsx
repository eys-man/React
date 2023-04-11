import { FC, useContext, useEffect, useState } from 'react';
import CardList from '../CardList/CardList';
import { CardsData } from '../../Types/Types';
import CardsContext from '../../components/CardsContext/CardsContext';

type Req = {
  page?: number;
  pageSize?: number;
};

const LoaderCardList: FC<Req> = ({ page, pageSize }) => {
  const value = useContext(CardsContext);

  const [error, setError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [items, setItems] = useState<CardsData>({
    data: [],
    info: {
      count: 0,
    },
    previousPage: '',
    nextPage: '',
  });

  let requestUrl = `https://api.disneyapi.dev/characters`;
  if (value.search !== '')
    requestUrl = `https://api.disneyapi.dev/character/?name=${value.search}`;

  useEffect(() => {
    fetch(requestUrl, { method: 'GET' })
      .then((resp) => {
        if (resp.status == 200) return resp.json();
        else throw new Error('Error');
      })
      // .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [page, pageSize, requestUrl]);

  if (error) {
    return <div>Error loading data!</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        {value.search === '' && (
          <p>
            page: {page}, cards on page: {pageSize}
          </p>
        )}
        <CardList data={items.data} />
      </>
    );
  }
};

export default LoaderCardList;
