import { FC, useEffect, useState } from 'react';
import CardList from '../CardList/CardList';
import { CardsData } from '../../Types/Types';

type Req = {
  url: string;
  page?: number;
  pageSize?: number;
  name?: string;
};

const LoaderCardList: FC<Req> = ({ url, page, pageSize, name }) => {
  const [error, setError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [items, setItems] = useState<CardsData>({
    data: [],
    count: 0,
    previousPage: '',
    nextPage: '',
  });

  const requestUrl =
    name !== ''
      ? `${url.slice(0, url.length - 1)}?name=${name}`
      : `${url}?page=${page}&pageSize=${pageSize}`;
  // alert(`requestUrl: ${requestUrl}\n`);
  useEffect(() => {
    fetch(requestUrl, { method: 'GET' })
      // fetch(`${url}?page=${page}&pageSize=${pageSize}`, { method: 'GET' })
      .then((res) => res.json())
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
  }, [page, pageSize, requestUrl, url]);

  if (error) {
    return <div>Error loading data!</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        {name === '' && (
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
