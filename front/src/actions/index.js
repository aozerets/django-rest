import { TOGGLE_PAGE, TOGGLE_COVERED_HEADER } from './actionTypes';

export const togglePage = page => {
  console.log("!!!");
  console.log(page);
  return {
    type: TOGGLE_PAGE,
    isVisible: page
  }
};

export const toggleHeader = status => {
  console.log("toggled");
  console.log(status);
  return {
    type: TOGGLE_COVERED_HEADER,
    isCovered: status
  }
};