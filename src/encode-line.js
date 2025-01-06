const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  
  if (str === '') return '';

  let result = '';
  let prevChar = str[0];
  let count = 1;
  str.split('').forEach(char => {
    if (prevChar === char) {
      count = count + 1;
    } else {
      if (count > 2){
        result += (count - 1) + prevChar;
      } else {
        result += prevChar;
      }
      prevChar = char;
      count = 2;
    }
  })
  if (count > 2){
    result += (count - 1) + prevChar;
  } else {
    result += prevChar;
  }
  return result;
}

module.exports = {
  encodeLine
};
