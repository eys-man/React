import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormCardList from './FormCardList';

describe('FormCardList Render', () => {
  const cardData = [
    {
      name: 'Sam',
      time: '2020-01-01',
      city: 'Minsk',
      gender: 'male',
      file: 'bara.jpg',
      isAgree: true,
    },
    {
      name: 'Ann',
      time: '2021-02-02',
      city: 'Mogilev',
      gender: 'female',
      file: 'sheep.jpg',
      isAgree: true,
    },
  ];

  test('Render all cards from mock data', () => {
    render(<FormCardList cardData={cardData} />);
    expect(screen.getAllByTestId('form-card-test')).toHaveLength(2);
  });
});
