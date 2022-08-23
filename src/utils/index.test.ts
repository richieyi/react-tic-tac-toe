import {
  isRowWin,
  isGameWon,
  rotateBoard,
  isColumnWin,
  isDiagonalWin,
  leftToRightDiagonal,
  isRowAllOneTile,
  rightToLeftDiagonal,
} from '.';

describe('isRowAllOneTile', () => {
  test('returns true if row is all one tile', () => {
    const row = ['X', 'X', 'X'];
    expect(isRowAllOneTile(row)).toBeTruthy();
  });

  test('returns false if row is not all one tile', () => {
    const row = ['O', 'O', 'X'];
    expect(isRowAllOneTile(row)).toBeFalsy();
  });
});

describe('isRowWin', () => {
  test('returns true for row win', () => {
    const board1 = [
      ['X', 'X', 'X'],
      ['?', '?', '?'],
      ['?', '?', '?'],
    ];
    expect(isRowWin(board1)).toBeTruthy();

    const board2 = [
      ['?', '?', '?'],
      ['X', 'X', 'X'],
      ['?', '?', '?'],
    ];
    expect(isRowWin(board2)).toBeTruthy();

    const board3 = [
      ['?', '?', '?'],
      ['?', '?', '?'],
      ['O', 'O', 'O'],
    ];
    expect(isRowWin(board3)).toBeTruthy();
  });

  test('returns false for no row win', () => {
    const board1 = [
      ['X', 'X', 'O'],
      ['?', '?', '?'],
      ['?', '?', '?'],
    ];
    expect(isRowWin(board1)).toBeFalsy();
  });
});

describe('isColumnWin', () => {
  test('returns true for column win', () => {
    const board1 = [
      ['X', '?', '?'],
      ['X', '?', '?'],
      ['X', '?', '?'],
    ];
    expect(isColumnWin(board1)).toBeTruthy();

    const board2 = [
      ['?', 'X', '?'],
      ['?', 'X', '?'],
      ['?', 'X', '?'],
    ];
    expect(isColumnWin(board2)).toBeTruthy();

    const board3 = [
      ['?', '?', 'X'],
      ['?', '?', 'X'],
      ['?', '?', 'X'],
    ];
    expect(isColumnWin(board3)).toBeTruthy();
  });

  test('returns false for no column win', () => {
    const board1 = [
      ['X', '?', '?'],
      ['X', '?', '?'],
      ['O', '?', '?'],
    ];
    expect(isColumnWin(board1)).toBeFalsy();
  });
});

describe('isDiagonalWin', () => {
  test('returns true for diagonal win', () => {
    const board1 = [
      ['X', '?', '?'],
      ['?', 'X', '?'],
      ['?', '?', 'X'],
    ];
    expect(isDiagonalWin(board1)).toBeTruthy();
  });
});

describe('isGameWon', () => {
  test('returns true if game is won by row', () => {
    const board1 = [
      ['X', 'X', 'X'],
      ['?', '?', '?'],
      ['?', '?', '?'],
    ];
    expect(isGameWon(board1)).toBeTruthy();
  });

  test('returns true if game is won by column', () => {
    const board1 = [
      ['X', '?', '?'],
      ['X', '?', '?'],
      ['X', '?', '?'],
    ];
    expect(isGameWon(board1)).toBeTruthy();
  });

  test('returns true if game is won by diagonal', () => {
    const board1 = [
      ['X', '?', '?'],
      ['?', 'X', '?'],
      ['?', '?', 'X'],
    ];
    expect(isGameWon(board1)).toBeTruthy();
  });

  test('returns false if game is not won', () => {
    const board1 = [
      ['X', 'X', 'O'],
      ['?', '?', '?'],
      ['?', '?', '?'],
    ];
    expect(isGameWon(board1)).toBeFalsy();
  });
});

describe('rotateBoard', () => {
  test('rotates board', () => {
    const board1 = [
      ['X', 'X', 'X'],
      ['O', 'O', 'O'],
      ['?', '?', '?'],
    ];
    const board2 = [
      ['X', 'O', '?'],
      ['X', 'O', '?'],
      ['X', 'O', '?'],
    ];
    expect(rotateBoard(board1)).toEqual(board2);
  });
});

describe('leftToRightDiagonal', () => {
  test('gathers diagonal from left to right', () => {
    const board1 = [
      ['X', 'X', 'O'],
      ['O', 'O', 'X'],
      ['?', '?', 'O'],
    ];
    const diagonal1 = ['X', 'O', 'O'];
    expect(leftToRightDiagonal(board1)).toEqual(diagonal1);

    const board2 = [
      ['O', 'X', 'O'],
      ['O', 'X', 'X'],
      ['?', '?', '?'],
    ];
    const diagonal2 = ['O', 'X', '?'];
    expect(leftToRightDiagonal(board2)).toEqual(diagonal2);
  });
});

describe('rightToLeftDiagonal', () => {
  test('gathers diagonal from right to left', () => {
    const board1 = [
      ['?', 'X', 'O'],
      ['O', 'O', '?'],
      ['X', '?', 'O'],
    ];
    const diagonal1 = ['O', 'O', 'X'];
    expect(rightToLeftDiagonal(board1)).toEqual(diagonal1);

    const board2 = [
      ['?', 'X', '?'],
      ['O', 'X', '?'],
      ['O', '?', 'O'],
    ];
    const diagonal2 = ['?', 'X', 'O'];
    expect(rightToLeftDiagonal(board2)).toEqual(diagonal2);
  });
});
