import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  const props = {
    _id: 10,
    films: [],
    shortFilms: [],
    tvShows: [],
    videoGames: [],
    parkAttractions: [],
    allies: [],
    enemies: [],
    name: 'Card name',
    imageUrl: '',
    url: '',
  };

  test('Render a card', () => {
    render(<Card {...props} />);
    expect(screen.getByText(/Card name/)).toBeInTheDocument();
    // expect(screen.getByText(/Description/)).toBeInTheDocument();
  });
});
