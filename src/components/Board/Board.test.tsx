import { fireEvent, render, screen } from '@testing-library/react';
import Board from './index';

const setup = () => {
  render(<Board />);
};

test('renders Board', () => {
  setup();
  const el = screen.getByTestId('board');
  expect(el).toBeInTheDocument();
});

test('renders default turn', () => {
  setup();
  const el = screen.getByText('Turn: X');
  expect(el).toBeInTheDocument();
});

test('sets piece on board when clicked', () => {
  setup();
  const tiles = screen.getAllByTestId('board-tile');
  expect(tiles[0]).toBeInTheDocument();
  fireEvent.click(tiles[0]);

  const el2 = screen.getByText('X');
  expect(el2).toBeInTheDocument();

  const el3 = screen.getByText('Turn: O');
  expect(el3).toBeInTheDocument();
});

test('renders game over state', () => {
  setup();
  const tiles = screen.getAllByTestId('board-tile');
  expect(tiles[0]).toBeInTheDocument();
  fireEvent.click(tiles[0]);
  fireEvent.click(tiles[3]);
  fireEvent.click(tiles[1]);
  fireEvent.click(tiles[4]);
  fireEvent.click(tiles[2]);

  const el = screen.getByText(/Game over!/i);
  expect(el).toBeInTheDocument();
});