import { useState } from 'react';

const defaultGrid = '123456789'.split('');
const defaultTurn = 'X';

type Piece = 'X' | 'O';

function Board() {
  const [grid, setGrid] = useState<String[]>(defaultGrid);
  const [turn, setTurn] = useState<Piece>(defaultTurn);

  function renderBoard() {
    return grid.map((location, idx) => (
      <button onClick={() => setPiece(idx, turn)}>{location}</button>
    ));
  }

  function setPiece(location: number, piece: Piece) {
    const newGrid = [...grid];
    newGrid.splice(location, 1, piece);
    setGrid(newGrid);
    if (turn === 'X') {
      setTurn('O');
    } else if (turn === 'O') {
      setTurn('X');
    }
  }

  return (
    <div className="grid grid-cols-3 m-auto max-w-md py-12">
      {renderBoard()}
    </div>
  );
}

export default Board;
