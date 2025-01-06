const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('');
  let answers = [];
  arr.forEach((s, index) => {
    let m = [...arr];
    m.splice(index, 1);
    answers.push(parseInt(m.join('')));       
  })
  return Math.max(...answers);
}
module.exports = {
  deleteDigit
};
