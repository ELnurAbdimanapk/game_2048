import React, { useEffect, useState } from "react";
import GameBoard from "./GameBoard";
import {
  StyledButton,
  StyledContainer,
  StyledHeader,
} from "../styles/GameStyles";
import { slideLeft } from "./move/moveToLeft";
import { slideRight } from "./move/moveToRight";
import { slideUp } from "./move/moveToUp";
import { slideDown } from "./move/moveToDown";
import { getEmptyCell } from "./move/emptycell";
import { gridChanged } from "./move/changedGrid";
import { getNewCellValue } from "./move/newCell";

function GameFunction() {
  // Initial state of the game
  const [grid, setGrid] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  const generateNewNumber = () => {
    const emptySpots = [];
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === 0) {
          emptySpots.push([i, j]);
        }
      }
    }

    if (emptySpots.length > 0) {
      const randomSpot =
        emptySpots[Math.floor(Math.random() * emptySpots.length)];
      const randomNumber = Math.random() < 0.9 ? 2 : 4;
      const newGrid = [...grid];
      newGrid[randomSpot[0]][randomSpot[1]] = randomNumber;
      setGrid(newGrid);
    }
  };

  // Handle the keypress event
  const handleKeyPress = (event) => {
    // Create a new array to avoid mutating the state directly
    let newGrid = JSON.parse(JSON.stringify(grid));

    switch (event.key) {
      case "ArrowLeft":
        newGrid = slideLeft(newGrid);
        break;
      case "ArrowRight":
        newGrid = slideRight(newGrid);
        break;
      case "ArrowUp":
        newGrid = slideUp(newGrid);
        break;
      case "ArrowDown":
        newGrid = slideDown(newGrid);
        break;
      default:
        break;
    }
    if (gridChanged(grid, newGrid)) {
      let cell = getEmptyCell(newGrid);
      if (cell) {
        newGrid[cell.row][cell.col] = getNewCellValue();
      }
    }

    setGrid(newGrid);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [grid]);

  const startNewGame = () => {
    setGrid([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
    generateNewNumber();
  };

  return (
    <>
      <StyledContainer>
        <StyledHeader>Game 2048</StyledHeader>
        <StyledButton onClick={startNewGame}>New Game</StyledButton>
        <GameBoard values={grid} />;
      </StyledContainer>
    </>
  );
}

export default GameFunction;
