import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  const props = {
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
  };

  test('Render a card with a picture', () => {
    render(<Card {...props} />);
    const img = screen.getByRole('img');
    expect(img).toBeTruthy();
    expect(screen.getByText(/Rick/)).toBeInTheDocument();
  });
});
