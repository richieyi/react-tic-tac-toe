import { FlatBoard, TwoDBoard } from '../components/Board';
import chunk from 'lodash/chunk';

export const create2dBoard = (board: FlatBoard) => {
  return chunk(board, 3);
};

export const isRowAllOneTile = (row: string[]) => {
  return (
    row.filter((tile) => tile === 'X').length === 3 ||
    row.filter((tile) => tile === 'O').length === 3
  );
};

export const isRowWin = (board: FlatBoard) => {
  const twoDBoard = create2dBoard(board);
  const isRowOneWin = isRowAllOneTile(twoDBoard[0]);
  const isRowTwoWin = isRowAllOneTile(twoDBoard[1]);
  const isRowThreeWin = isRowAllOneTile(twoDBoard[2]);

  return isRowOneWin || isRowTwoWin || isRowThreeWin;
};

export const isColumnWin = (board: FlatBoard) => {
  const twoDBoard = create2dBoard(board);
  const rotatedBoard = rotateBoard(twoDBoard);
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
