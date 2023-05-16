import React, { useEffect, useState } from "react";
import GameBoard from "./GameBoard";
import { styled } from "styled-components";

function GameFunction() {
  const [values, setValues] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  function addNumber() {
    let options = [];
    for (let i = 0; i < values.length; i++) {
      for (let j = 0; j < values[i].length; j++) {
        if (values[i][j] === 0) {
          options.push({ x: i, y: j });
        }
      }
    }

    if (options.length > 0) {
      let spot = options[Math.floor(Math.random() * options.length)]; //Случайная ячейка
      let k = Math.random();
      setValues((prevValues) => {
        let newValues = JSON.parse(JSON.stringify(prevValues)); 
        newValues[spot.x][spot.y] = k > 0.1 ? 2 : 4;
        return newValues;
      });
    }
  }
  useEffect(() => {
    addNumber();
  }, []);



  return (
    <>
      <StyledContainer>
        <STyledHeader>Game 2048</STyledHeader>
        <StyledButton>New Game</StyledButton>
        <GameBoard values={values} />;
      </StyledContainer>
    </>
  );
}

export default GameFunction;

// Styless

const STyledHeader = styled.h1`
  font-size: 72px;
  text-align: center;
`;

const StyledButton = styled.button`
  background-color: #fdd400;
  width: 150px;
  height: 50px;
  margin: auto;
  border: 1px solid #fdd400;
  border-radius: 10px;
  color: #18db7f;
  font-weight: 900;
  margin-bottom: 50px;
`;

const StyledContainer = styled.div`
  width: 1000px;
  text-align: center;
  margin: auto;
`;
