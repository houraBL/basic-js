const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArr = []
  arr.forEach(elem => {
    if (elem >= 0){
      newArr.push(elem);
    }
  })
  let result = [];
  let index = 0;
  newArr.sort(function(a, b) {
    return a - b;
  })
  arr.forEach(elem => {
    if (elem < 0) {
      result.push(elem)
    } else {
      result.push(newArr[index]);
      index++
    }
  })

  return result


}

module.exports = {
  sortByHeight
};
