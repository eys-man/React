import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardList from './CardList';
import { CardsData } from 'Types/Types';

describe('CardList Render', () => {
  const cards: CardsData = {
    count: 3,
    data: [
      {
        _id: 10,
        films: [],
        shortFilms: [],
        tvShows: [],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        name: 'Card name 1',
        imageUrl: '',
        url: '',
      },
      {
        _id: 20,
        films: [],
        shortFilms: [],
        tvShows: [],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        name: 'Card name 2',
        imageUrl: '',
        url: '',
      },
      {
        _id: 30,
        films: [],
        shortFilms: [],
        tvShows: [],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        name: 'Card name 3',
        imageUrl: '',
        url: '',
      },
    ],
  };

  test('Render all cards from mock data', () => {
    render(<CardList data={cards.data} />);
    expect(screen.getAllByTestId('card-test')).toHaveLength(3);
  });
});
