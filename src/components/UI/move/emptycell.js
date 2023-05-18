export const getEmptyCell = (inputGrid) => {
    let emptyCells = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (inputGrid[i][j] === 0) {
          emptyCells.push({ row: i, col: j });
        }
      }
    }
    if (emptyCells.length === 0) {
      return null;
    }
    return emptyCells[Math.floor(Math.random() * emptyCells.length)];
  };