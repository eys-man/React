import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  const title = 'Title';
  test('Render a header', () => {
    render(<Header title={title} />);
    expect(screen.getByText('Title')).toBeInTheDocument();
  });
});
