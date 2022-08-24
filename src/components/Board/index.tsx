import { useEffect, useState } from 'react';
import { isGameWon } from '../../utils';

const emptyBoard = [...Array(3)].map((_) => Array(3).fill('?'));
const defaultBoard = [...Array(3)].map((_) => Array(3).fill('?'));
const defaultTurn = 'X';

export type PieceType = 'X' | 'O';
export type BoardType = string[][];

function Board() {
  const [board, setBoard] = useState<BoardType>(defaultBoard);
  const [turn, setTurn] = useState<PieceType>(defaultTurn);
  const [isWon, setIsWon] = useState<boolean>(false);

  useEffect(() => {
    if (isGameWon(board)) {
      setIsWon(true);
    }
  }, [board]);

  function renderBoard() {
    return board.map((row, rowIdx) => {
      return row.map((tile, tileIdx) => (
        <button
          className="border border-black h-20 w-20"
          data-testid="board-tile"
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
    if (isWon) {
      return;
    }

    const newBoard = [...board];
    newBoard[rowIdx].splice(tileIdx, 1, piece);
    setBoard(newBoard);
    if (turn === 'X') {
      setTurn('O');
    } else if (turn === 'O') {
      setTurn('X');
    }
  }

  function resetBoard() {
    setBoard(emptyBoard);
    setTurn(defaultTurn);
    setIsWon(false);
  }

  return (
    <div data-testid="board">
      <div className="flex justify-center">
        <div className="grid grid-cols-3 m-auto max-w-md py-12">
          {renderBoard()}
        </div>
      </div>
      <div className="flex justify-center">
        <span>
          {isWon
            ? 'Game over! Reset to play again.'
            : `Turn: ${turn}`}
        </span>
      </div>
      {isWon ? (
        <div className="flex justify-center">
          <button
            data-testid="reset-button"
            className="border bg-blue-500 text-white rounded px-8 py-2 my-2"
            onClick={resetBoard}
          >
            Reset
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Board;
