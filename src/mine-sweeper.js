const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper( matrix ) {
  let result = new Array(matrix.length);
  for (let i = 0; i < matrix.length; i++ ) {
    result[i] = new Array(matrix[i].length)
    for (let j = 0; j < matrix[i].length; j++){
      result[i][j] = 0;
      let arr = [-1, 0, 1];
      for (let k = 0; k < 3; k++){
        for (let m = 0; m < 3; m++){
          if ( i + arr[k] >= 0 
            && j + arr[m] >= 0 
            && i + arr[k] < matrix.length 
            && j + arr[m] < matrix[i].length){
              if (matrix[i + arr[k]][j + arr[m]]) {
                result[i][j] += 1;
            }
          }
            
        }
      }
      if (matrix[i][j]) result[i][j] -= 1;
      
    }
  }
  return result
}

module.exports = {
  minesweeper
};
