import { describe, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import FormPage from '../../pages/FormPage';

describe('Form', () => {
  test('Renders Form', () => {
    render(<FormPage />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Birthday')).toBeInTheDocument();
    expect(screen.getByText('City')).toBeInTheDocument();
    expect(screen.getByText('male')).toBeInTheDocument();
    expect(screen.getByText('female')).toBeInTheDocument();
    expect(screen.getByText('Choose file')).toBeInTheDocument();
    expect(screen.getByText('Agree to learn React')).toBeInTheDocument();
  });

  test('Radio buttons response', () => {
    render(<FormPage />);
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
    render(<FormPage />);
    const checkBox = screen.getByRole<HTMLInputElement>('checkbox', {});
    expect(checkBox).not.toBeChecked();
    fireEvent.click(checkBox);
    expect(checkBox).toBeChecked();
  });
});
