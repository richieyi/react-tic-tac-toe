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

export const isColumnWin = (grid: GridType) => {
  const rotatedBoard = rotateBoard(grid);
  return isRowWin(rotatedBoard);
};

export const isGameWon = (grid: GridType) => {
  // Row win
  // Column win
  return isRowWin(grid) || isColumnWin(grid);
  // Diagonal win
};

export const rotateBoard = (grid: GridType) => {
  const newGrid: String[][] = [[], [], []];
  for (let rowIdx = 0; rowIdx < grid.length; rowIdx++) {
    const row = grid[rowIdx];
    for (let tileIdx = 0; tileIdx < row.length; tileIdx++) {
      const tile = row[tileIdx];
      newGrid[tileIdx].push(tile);
    }
  }
  return newGrid;
};
