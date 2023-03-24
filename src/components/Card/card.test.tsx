import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './card';

describe('Card', () => {
  const props = {
    id: 1,
    image: 'image',
    title: 'Title',
    description: 'Description',
  };

  test('Render a card', () => {
    render(<Card {...props} />);
    expect(screen.getByText(/Title/)).toBeInTheDocument();
    expect(screen.getByText(/Description/)).toBeInTheDocument();
  });
});
