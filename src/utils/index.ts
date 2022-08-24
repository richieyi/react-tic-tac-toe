import { BoardType } from '../components/Board';

export const isRowAllOneTile = (row: string[]) => {
  return (
    row.filter((tile) => tile === 'X').length === 3 ||
    row.filter((tile) => tile === 'O').length === 3
  );
};

export const isRowWin = (board: BoardType) => {
  const isRowOneWin = isRowAllOneTile(board[0]);
  const isRowTwoWin = isRowAllOneTile(board[1]);
  const isRowThreeWin = isRowAllOneTile(board[2]);

  return isRowOneWin || isRowTwoWin || isRowThreeWin;
};

export const isColumnWin = (board: BoardType) => {
  const rotatedBoard = rotateBoard(board);
  return isRowWin(rotatedBoard);
};

export const isDiagonalWin = (board: BoardType) => {
  const isLeftToRightWin = isRowAllOneTile(
    getDiagonal(board, 'left')
  );
  const isRightToLeftWin = isRowAllOneTile(
    getDiagonal(board, 'right')
  );

  return isLeftToRightWin || isRightToLeftWin;
};

export const isGameWon = (board: BoardType) => {
  return (
    isRowWin(board) || isColumnWin(board) || isDiagonalWin(board)
  );
};

export const rotateBoard = (board: BoardType) => {
  const newBoard: string[][] = [[], [], []];
  for (let rowIdx = 0; rowIdx < board.length; rowIdx++) {
    const row = board[rowIdx];
    for (let tileIdx = 0; tileIdx < row.length; tileIdx++) {
      const tile = row[tileIdx];
      newBoard[tileIdx].push(tile);
    }
  }
  return newBoard;
};

type StartPosition = 'left' | 'right';

export const getDiagonal = (
  board: BoardType,
  startPosition: StartPosition
) => {
  const diagonal = [];

  for (let rowIdx = 0; rowIdx < board.length; rowIdx++) {
    const row = board[rowIdx];
    let tile = '?';
    if (startPosition === 'left') {
      tile = board[rowIdx][rowIdx];
    } else if (startPosition === 'right') {
      tile = board[rowIdx][row.length - 1 - rowIdx];
    }
    diagonal.push(tile);
  }

  return diagonal;
};
