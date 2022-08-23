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
  const els = screen.getAllByTestId('board-tile');
  expect(els[0]).toBeInTheDocument();
  fireEvent.click(els[0]);

  const el2 = screen.getByText('X');
  expect(el2).toBeInTheDocument();

  const el3 = screen.getByText('Turn: O');
  expect(el3).toBeInTheDocument();
});
