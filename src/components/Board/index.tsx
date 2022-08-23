import { useEffect, useState } from 'react';
import { isGameWon } from '../../utils';

const defaultGrid = [...Array(3)].map((_) => Array(3).fill('?'));
const defaultTurn = 'X';

export type PieceType = 'X' | 'O';
export type GridType = String[][];

function Board() {
  const [grid, setGrid] = useState<GridType>(defaultGrid);
  const [turn, setTurn] = useState<PieceType>(defaultTurn);
  console.log(grid);

  useEffect(() => {
    console.log(isGameWon(grid));
  }, [grid]);

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

  function setPiece(
    rowIdx: number,
    tileIdx: number,
    piece: PieceType
  ) {
    const newGrid = [...grid];
    newGrid[rowIdx].splice(tileIdx, 1, piece);
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
