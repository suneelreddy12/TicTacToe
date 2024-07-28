import React, { useReducer } from "react";
import "./TicTacToe.css";

const initialState = {
  board: Array(9).fill(null),
  isXTurn: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "MAKE_MOVE":
      const updatedBoard = [...state.board];
      updatedBoard[action.payload] = state.isXTurn ? "X" : "O";
      return {
        ...state,
        board: updatedBoard,
        isXTurn: !state.isXTurn,
      };
    case "RESET_GAME":
      return initialState;
    default:
      return state;
  }
};

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleCellClick = (index) => {
    if (!state.board[index]) {
      // Prevent changing a cell that's already filled
      dispatch({ type: "MAKE_MOVE", payload: index });
    }
  };

  const handleResetClick = () => {
    dispatch({ type: "RESET_GAME" });
  };

  return (
    <div className="tictactoe-container">
      <div className="board">
        {state.board.map((cellValue, index) => (
          <div
            key={index}
            className="cell"
            onClick={() => handleCellClick(index)}
          >
            {cellValue}
          </div>
        ))}
      </div>
      <button className="reset-button" onClick={handleResetClick}>
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
