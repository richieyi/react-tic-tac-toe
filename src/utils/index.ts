import { GridType } from '../components/Board';

export const isRowWin = (grid: GridType) => {
  // Row 1
  const isRowOneWin =
    grid[0].filter((tile) => tile === 'X').length === 3 ||
    grid[0].filter((tile) => tile === 'O').length === 3;
  // Row 2
  const isRowTwoWin =
    grid[1].filter((tile) => tile === 'X').length === 3 ||
    grid[1].filter((tile) => tile === 'O').length === 3;
  // Row 3
  const isRowThreeWin =
    grid[2].filter((tile) => tile === 'X').length === 3 ||
    grid[2].filter((tile) => tile === 'O').length === 3;

  return isRowOneWin || isRowTwoWin || isRowThreeWin;
};

export const isGameWon = (grid: GridType) => {
  // Row win
  return isRowWin(grid);
  // Column win
  // Diagonal win
};

export const rotateBoard = (grid: GridType) => {
  return grid;
};
