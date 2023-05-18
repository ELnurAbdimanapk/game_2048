import { slideLeft } from "./moveToLeft";
import { transpose } from "./transpose";

export const slideUp = (inputGrid) => {
    let newGrid = transpose(inputGrid);
    newGrid = slideLeft(newGrid);
    newGrid = transpose(newGrid);
    return newGrid;
  };
  