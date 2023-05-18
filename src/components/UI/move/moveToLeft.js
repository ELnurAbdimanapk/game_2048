export const slideLeft = (inputGrid) => {
  let newGrid = JSON.parse(JSON.stringify(inputGrid));

  for (let i = 0; i < 4; i++) {
    let row = newGrid[i];
    let slowPointer = 0;
    let fastPointer = 1;

    while (slowPointer < 4) {
      if (fastPointer === 4) {
        fastPointer = slowPointer + 1;
        slowPointer++;
        continue;
      }
      if (row[slowPointer] === 0 && row[fastPointer] === 0) {
        fastPointer++;
      } else if (row[slowPointer] === 0 && row[fastPointer] !== 0) {
        row[slowPointer] = row[fastPointer];
        row[fastPointer] = 0;
        fastPointer++;
      } else if (row[slowPointer] !== 0 && row[fastPointer] === 0) {
        fastPointer++;
      } else if (row[slowPointer] !== 0 && row[fastPointer] !== 0) {
        if (row[slowPointer] === row[fastPointer]) {
          row[slowPointer] = row[slowPointer] + row[fastPointer];
          row[fastPointer] = 0;
          fastPointer = slowPointer + 1;
          slowPointer++;
        } else {
          slowPointer++;
          fastPointer = slowPointer + 1;
        }
      }
    }
  }

  return newGrid;
};
