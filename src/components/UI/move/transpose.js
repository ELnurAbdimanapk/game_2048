export const transpose = (grid) => {
    let newGrid = [];
    for (let j = 0; j < 4; j++) {
      newGrid[j] = [];
      for (let i = 0; i < 4; i++) {
        newGrid[j][i] = grid[i][j];
      }
    }
    return newGrid;
  };
  