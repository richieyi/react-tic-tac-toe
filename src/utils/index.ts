import { BoardType } from '../components/Board';

export const isRowWin = (board: BoardType) => {
  // Row 1
  const isRowOneWin =
    board[0].filter((tile) => tile === 'X').length === 3 ||
    board[0].filter((tile) => tile === 'O').length === 3;
  // Row 2
  const isRowTwoWin =
    board[1].filter((tile) => tile === 'X').length === 3 ||
    board[1].filter((tile) => tile === 'O').length === 3;
  // Row 3
  const isRowThreeWin =
    board[2].filter((tile) => tile === 'X').length === 3 ||
    board[2].filter((tile) => tile === 'O').length === 3;

  return isRowOneWin || isRowTwoWin || isRowThreeWin;
};

export const isColumnWin = (board: BoardType) => {
  const rotatedBoard = rotateBoard(board);
  return isRowWin(rotatedBoard);
};

export const isGameWon = (board: BoardType) => {
  // Row win
  // Column win
  return isRowWin(board) || isColumnWin(board);
  // Diagonal win
};

export const rotateBoard = (board: BoardType) => {
  const newBoard: String[][] = [[], [], []];
  for (let rowIdx = 0; rowIdx < board.length; rowIdx++) {
    const row = board[rowIdx];
    for (let tileIdx = 0; tileIdx < row.length; tileIdx++) {
      const tile = row[tileIdx];
      newBoard[tileIdx].push(tile);
    }
  }
  return newBoard;
};
