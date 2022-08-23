import { isRowWin, isGameWon, rotateBoard, isColumnWin } from '.';

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
