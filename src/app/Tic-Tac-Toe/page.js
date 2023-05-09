"use client";
import Square from "@/components/TicTacToe-comps/Square";
import { useState, useEffect } from "react";

const TicTacToe = () => {
  const [turn, setTurn] = useState("x");
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();

  useEffect(() => {
    if (!squares.includes("")) {
      setWinner("Draw!");
    }
  }, [squares]);

  const checkForWinner = (cells) => {
    let combos = {
      COMBOS: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          cells[pattern[0]] === "" ||
          cells[pattern[1]] === "" ||
          cells[pattern[2]] === ""
        ) {
          //do nothing
        } else if (
          cells[pattern[0]] === cells[pattern[1]] &&
          cells[pattern[1]] === cells[pattern[2]]
        ) {
          setWinner(`${cells[pattern[0]]} Is The Winner!`);
        }
      });
    }
  };

  const handleClick = (index) => {
    if (squares[index] !== "") {
      return;
    }
    let cells = [...squares];

    if (turn === "x") {
      cells[index] = "X";
      setTurn("o");
    } else {
      cells[index] = "O";
      setTurn("x");
    }
    setSquares(cells);
    checkForWinner(cells);
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(""));
    setTurn("x");
    setWinner(null);
  };

  return (
    <>
      <div className="-mt-4">
        <p className="text-white text-xl font-mono font-semibold mb-2">
          Turn: {turn}
        </p>
        <div
          className={`grid grid-cols-3 gap-1 border-white ${
            winner ? "pointer-events-none" : ""
          }`}
        >
          {squares?.map((square, index) => (
            <div key={index}>
              <Square
                id={Math.random()}
                value={squares[index]}
                handleClick={() => handleClick(index)}
              />
            </div>
          ))}
        </div>
        {winner && (
          <div className="text-center mt-4">
            <p className="text-white text-xl font-mono font-semibold mb-2">
              {winner}
            </p>
            <button
              className="font-mono border-2 border-white text-white py-2 px-4 w-fit hover:bg-[#020000] hover:shadow-white hover:shadow hover:-mt-1"
              onClick={handleRestart}
            >
              Restart The Game
            </button>
          </div>
        )}
      </div>
    </>
  );
};
export default TicTacToe;
