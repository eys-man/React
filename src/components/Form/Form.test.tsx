import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormCardList from '../FormCardList/FormCardList';

describe('Form', () => {
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
    render(<FormCardList cardData={[...arr]} />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Birthday')).toBeInTheDocument();
    expect(screen.getByLabelText('City')).toBeInTheDocument();
    expect(screen.getByLabelText('male')).toBeInTheDocument();
    expect(screen.getByLabelText('female')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose file')).toBeInTheDocument();
    expect(screen.getByLabelText('Agree to learn React')).toBeInTheDocument();
  });
});
