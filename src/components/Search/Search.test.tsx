import { test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Search from './Search';

test('Render SearchBar', () => {
  render(<Search />);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});

test('Change value of SearchBar', () => {
  render(<Search />);
  fireEvent.change(screen.getByRole<HTMLInputElement>('textbox'), {
    target: { value: '2023' },
  });
  expect(screen.getByRole<HTMLInputElement>('textbox').value).toBe('2023');
});
    
