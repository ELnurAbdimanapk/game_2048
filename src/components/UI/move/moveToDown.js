import { slideRight } from "./moveToRight";
import { transpose } from "./transpose";

export const slideDown = (inputGrid) => {
  let newGrid = transpose(inputGrid);
  newGrid = slideRight(newGrid);
  newGrid = transpose(newGrid);
  return newGrid;
};
