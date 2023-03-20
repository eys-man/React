import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './components/Card/card';

describe('Card', () => {
  const props = {
    id: 1,
    image: 'image',
    title: 'Title',
    description: 'Description',
  };

  test('Renders a card', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    render(<Card {...props} />);
    expect(screen.getByText(/Title/)).toBeInTheDocument();
    expect(screen.getByText(/Description/)).toBeInTheDocument();
  });
});
