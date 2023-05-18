export const gridChanged = (oldGrid, newGrid) => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (oldGrid[i][j] !== newGrid[i][j]) {
          return true;
        }
      }
    }
    return false;
  };