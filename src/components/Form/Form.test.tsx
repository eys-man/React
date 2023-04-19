import { describe, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import FormPage from '../../pages/FormPage';
import { Provider } from 'react-redux';
import { store } from '../../Redux/store';

describe('Form', () => {
  test('Renders Form', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Birthday')).toBeInTheDocument();
    expect(screen.getByText('City')).toBeInTheDocument();
    expect(screen.getByText('male')).toBeInTheDocument();
    expect(screen.getByText('female')).toBeInTheDocument();
    expect(screen.getByText('Choose file')).toBeInTheDocument();
    expect(screen.getByText('Agree to learn React')).toBeInTheDocument();
  });

  test('Radio buttons response', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    const radioMale = screen.getByRole<HTMLInputElement>('radio', {
      name: 'male',
    });
    const radioFemale = screen.getByRole<HTMLInputElement>('radio', {
      name: 'female',
    });
    fireEvent.click(radioMale);
    expect(radioFemale).not.toBeChecked();
    expect(radioMale).toBeChecked();
  });

  test('Checkbox response', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    const checkBox = screen.getByRole<HTMLInputElement>('checkbox', {});
    expect(checkBox).not.toBeChecked();
    fireEvent.click(checkBox);
    expect(checkBox).toBeChecked();
  });

  test('Select box response', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    const selectBox = screen.getByRole<HTMLSelectElement>('combobox');
    expect(
      screen.getByRole<HTMLOptionElement>('option', {
        name: '-- select city --',
      }).selected
    ).toBe(true);
    expect(screen.getAllByRole('option').length).toBe(7);

    fireEvent.change(selectBox, { target: { value: 'Mogilev' } });

    expect(
      screen.getByRole<HTMLOptionElement>('option', { name: 'Mogilev' })
        .selected
    ).toBe(true);
    expect(selectBox.value).toBe('Mogilev');
    expect(selectBox.value).not.toBe('');
    expect(selectBox.value).not.toBe('Minsk');
    expect(selectBox.value).not.toBe('Brest');
    expect(selectBox.value).not.toBe('Grodno');
    expect(selectBox.value).not.toBe('Gomel');
    expect(selectBox.value).not.toBe('Vitebsk');
  });
});
