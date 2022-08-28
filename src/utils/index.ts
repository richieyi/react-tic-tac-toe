import { FlatBoard, TwoDBoard } from '../components/Board';

const chunk = (board: FlatBoard, size: number) => {
  const arr = [];
  let temp = [];
  for (let i = 0; i < board.length; i++) {
    const tile = board[i];
    temp.push(tile);

    if (temp.length === size) {
      arr.push(temp);
      temp = [];
    }
  }

  return arr;
};

export const getRows = (board: FlatBoard) => {
  return chunk(board, 3);
};

export const isRowAllOneTile = (row: string[]) => {
  return (
    row.filter((tile) => tile === 'X').length === 3 ||
    row.filter((tile) => tile === 'O').length === 3
  );
};

export const isRowWin = (board: FlatBoard) => {
  const rows = getRows(board);
  const isRowOneWin = isRowAllOneTile(rows[0]);
  const isRowTwoWin = isRowAllOneTile(rows[1]);
  const isRowThreeWin = isRowAllOneTile(rows[2]);

  return isRowOneWin || isRowTwoWin || isRowThreeWin;
};

export const isColumnWin = (board: FlatBoard) => {
  const rows = getRows(board);
  const rotatedBoard = rotateBoard(rows);
  return isRowWin(rotatedBoard);
};

export const isDiagonalWin = (board: TwoDBoard) => {
  const isLeftToRightWin = isRowAllOneTile(
    getDiagonal(board, 'left')
  );
  const isRightToLeftWin = isRowAllOneTile(
    getDiagonal(board, 'right')
  );

  return isLeftToRightWin || isRightToLeftWin;
};

export const isGameWon = (board: TwoDBoard) => {
  return (
    isRowWin(board) || isColumnWin(board) || isDiagonalWin(board)
  );
};

export const rotateBoard = (board: TwoDBoard) => {
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
  board: TwoDBoard,
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
