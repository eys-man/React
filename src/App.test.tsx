import { describe, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Card from './components/Card/card';
import Search from './components/search/search';

describe('Card', () => {
  const props = {
    id: 1,
    image: 'image',
    title: 'Title',
    description: 'Description',
  };

  test('Render a card', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    render(<Card {...props} />);
    expect(screen.getByText(/Title/)).toBeInTheDocument();
    expect(screen.getByText(/Description/)).toBeInTheDocument();
  });
});

test('Render SearchBar', () => {
  render(<Search />);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});

test('Change value of SearchBar', () => {
  render(<Search />);
  fireEvent.change(screen.getByRole<HTMLInputElement>('textbox'), { target: { value: '2023' } });
  // userEvent.type(screen.getByRole<HTMLInputElement>('textbox'), '1');
  expect(screen.getByRole<HTMLInputElement>('textbox').value).toBe('2023');
});
