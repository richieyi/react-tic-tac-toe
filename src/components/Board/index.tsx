import { useEffect, useState, useCallback } from 'react';

const defaultGrid = [...Array(3)].map((_) => Array(3).fill('?'));
const defaultTurn = 'X';

type Piece = 'X' | 'O';

function Board() {
  const [grid, setGrid] = useState<String[][]>(defaultGrid);
  const [turn, setTurn] = useState<Piece>(defaultTurn);
  console.log(grid);

  const isRowWin = useCallback(() => {
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
  }, [grid]);

  const calculateWin = useCallback(() => {
    // Row win
    return isRowWin();
    // Column win
    // Diagonal win
  }, [isRowWin]);

  useEffect(() => {
    console.log(calculateWin());
  }, [grid, calculateWin]);

  function renderBoard() {
    return grid.map((row, rowIdx) => {
      return row.map((tile, tileIdx) => (
        <button
          data-testid="grid-tile"
          key={`${tile}-${tileIdx}`}
          onClick={() => setPiece(rowIdx, tileIdx, turn)}
        >
          {tile}
        </button>
      ));
    });
  }

  function setPiece(rowIdx: number, tileIdx: number, piece: Piece) {
    const newGrid = [...grid];
    newGrid[rowIdx].splice(tileIdx, 1, piece);
    console.log(newGrid);
    setGrid(newGrid);
    if (turn === 'X') {
      setTurn('O');
    } else if (turn === 'O') {
      setTurn('X');
    }
  }

  function resetBoard() {
    setGrid(defaultGrid);
    setTurn(defaultTurn);
  }

  return (
    <div data-testid="board">
      <div className="grid grid-cols-3 m-auto max-w-md py-12">
        {renderBoard()}
      </div>
      <div className="flex justify-center">
        <span>Turn: {turn}</span>
      </div>
      <div className="flex justify-center">
        <button onClick={resetBoard}>Reset</button>
      </div>
    </div>
  );
}

export default Board;
