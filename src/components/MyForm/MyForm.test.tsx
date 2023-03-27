import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyForm from './MyForm';

describe('MyForm', () => {
  const arr = [
    {
      name: 'Name',
      time: '2020-01-01',
      city: 'Minsk',
      isAgree: true,
      gender: 'male',
      file: 'bara.jpg',
    },
  ];

  test('Renders Form', () => {
    render(<MyForm cardData={[...arr]} />);
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Birthdate:')).toBeInTheDocument();
    expect(screen.getByLabelText('Place of residence:')).toBeInTheDocument();
    expect(screen.getByLabelText('male')).toBeInTheDocument();
    expect(screen.getByLabelText('female')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose file')).toBeInTheDocument();
    expect(screen.getByLabelText('Agree to learn React')).toBeInTheDocument();
  });
});
