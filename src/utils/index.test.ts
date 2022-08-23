import { isRowWin, isGameWon, rotateBoard, isColumnWin } from '.';

describe('isRowWin', () => {
  test('returns true for row win', () => {
    const grid1 = [
      ['X', 'X', 'X'],
      ['?', '?', '?'],
      ['?', '?', '?'],
    ];
    expect(isRowWin(grid1)).toBeTruthy();

    const grid2 = [
      ['?', '?', '?'],
      ['X', 'X', 'X'],
      ['?', '?', '?'],
    ];
    expect(isRowWin(grid2)).toBeTruthy();

    const grid3 = [
      ['?', '?', '?'],
      ['?', '?', '?'],
      ['O', 'O', 'O'],
    ];
    expect(isRowWin(grid3)).toBeTruthy();
  });

  test('returns false for no row win', () => {
    const grid1 = [
      ['X', 'X', 'O'],
      ['?', '?', '?'],
      ['?', '?', '?'],
    ];
    expect(isRowWin(grid1)).toBeFalsy();
  });
});

describe('isColumnWin', () => {
  test('returns true for column win', () => {
    const grid1 = [
      ['X', '?', '?'],
      ['X', '?', '?'],
      ['X', '?', '?'],
    ];
    expect(isColumnWin(grid1)).toBeTruthy();

    const grid2 = [
      ['?', 'X', '?'],
      ['?', 'X', '?'],
      ['?', 'X', '?'],
    ];
    expect(isColumnWin(grid2)).toBeTruthy();

    const grid3 = [
      ['?', '?', 'X'],
      ['?', '?', 'X'],
      ['?', '?', 'X'],
    ];
    expect(isColumnWin(grid3)).toBeTruthy();
  });

  test('returns false for no column win', () => {
    const grid1 = [
      ['X', '?', '?'],
      ['X', '?', '?'],
      ['O', '?', '?'],
    ];
    expect(isColumnWin(grid1)).toBeFalsy();
  });
});

describe('isGameWon', () => {
  test('returns true if game is won by row', () => {
    const grid1 = [
      ['X', 'X', 'X'],
      ['?', '?', '?'],
      ['?', '?', '?'],
    ];
    expect(isGameWon(grid1)).toBeTruthy();
  });

  test('returns true if game is won by column', () => {
    const grid1 = [
      ['X', '?', '?'],
      ['X', '?', '?'],
      ['X', '?', '?'],
    ];
    expect(isGameWon(grid1)).toBeTruthy();
  });

  test('returns false if game is not won', () => {
    const grid1 = [
      ['X', 'X', 'O'],
      ['?', '?', '?'],
      ['?', '?', '?'],
    ];
    expect(isGameWon(grid1)).toBeFalsy();
  });
});

describe('rotateBoard', () => {
  test('rotates board', () => {
    const grid1 = [
      ['X', 'X', 'X'],
      ['O', 'O', 'O'],
      ['?', '?', '?'],
    ];
    const grid2 = [
      ['X', 'O', '?'],
      ['X', 'O', '?'],
      ['X', 'O', '?'],
    ];
    expect(rotateBoard(grid1)).toEqual(grid2);
  });
});
