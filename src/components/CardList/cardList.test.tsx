import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardList from './CardList';
import cardData from '../../mock/mock';

describe('CardList Render', () => {
  test('Render all cards from mock data', () => {
    render(<CardList cardData={cardData} />);
    expect(screen.getAllByTestId('card-test')).toHaveLength(6);
  });
});
