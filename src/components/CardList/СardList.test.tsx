import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardList from './CardList';
import { RMCardsData } from '../../Types/Types';

describe('CardList Render', () => {
  const cards: RMCardsData = {
    info: {
      count: 3,
    },
    results: [
      {
        id: 10,
        name: 'Rick',
        status: '',
        species: '',
        type: '',
        gender: 'male',
        origin: {
          name: '',
          url: '',
        },
        location: {
          name: 'Minsk',
          url: '',
        },
        image: '',
        episode: [],
        url: '',
        created: '',
      },
      {
        id: 20,
        name: 'Pete',
        status: '',
        species: '',
        type: '',
        gender: 'male',
        origin: {
          name: '',
          url: '',
        },
        location: {
          name: 'Mogilev',
          url: '',
        },
        image: '',
        episode: [],
        url: '',
        created: '',
      },
      {
        id: 30,
        name: 'Root',
        status: '',
        species: '',
        type: '',
        gender: 'female',
        origin: {
          name: '',
          url: '',
        },
        location: {
          name: 'Pinsk',
          url: '',
        },
        image: '',
        episode: [],
        url: '',
        created: '',
      },
    ],
  };

  test('Render all cards from mock data', () => {
    render(<CardList {...cards} />);
    expect(screen.getAllByTestId('card-test')).toHaveLength(3);
  });
});
