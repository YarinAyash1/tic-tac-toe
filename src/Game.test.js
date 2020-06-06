import React from 'react';
import { render } from '@testing-library/react';
import Game from './Game';

test('renders players ', () => {
  const { getByText } = render(<Game />);
  const player1 = getByText(/Player 1/i);
  const player2 = getByText(/Player 2/i);
  expect(player1).toBeInTheDocument();
  expect(player2).toBeInTheDocument();
});
