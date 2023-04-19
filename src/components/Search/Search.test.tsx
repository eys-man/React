import { test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Search from './Search';
import { Provider } from 'react-redux';
import { store } from '../../Redux/store';

test('Render SearchBar', () => {
  render(
    <Provider store={store}>
      <Search />
    </Provider>
  );
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});

test('Change value of SearchBar', () => {
  render(
    <Provider store={store}>
      <Search />
    </Provider>
  );
  fireEvent.change(screen.getByRole<HTMLInputElement>('textbox'), {
    target: { value: '2023' },
  });
  expect(screen.getByRole<HTMLInputElement>('textbox').value).toBe('2023');
});
