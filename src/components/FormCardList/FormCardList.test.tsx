import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormCardList from './FormCardList';
import { FormCardData } from '../../types/types';

describe('FormCardList Render', () => {
  const cardMockData: FormCardData[] = [
    {
      name: 'Sam',
      date: '2020-01-01',
      city: 'Minsk',
      gender: 'male',
      filePath: 'bara.jpg',
      agree: true,
    },
    {
      name: 'Ann',
      date: '2021-02-02',
      city: 'Mogilev',
      gender: 'female',
      filePath: 'sheep.jpg',
      agree: true,
    },
  ];

  test('Render all cards from mock data', () => {
    render(<FormCardList cardData={cardMockData} />);
    expect(screen.getAllByTestId('form-card-test')).toHaveLength(2);
  });
});
