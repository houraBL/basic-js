const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length === 0) return {};
  let result = new Object();
  let strArray = [];
  let strMehArray = [];
  domains.forEach((d) => {
    d.split('.').reverse();
    for (let i = 0; i < d.split('.').reverse().length; i = i + 1) {
      let str = '';
      let strMeh = '';
      for (let j = i; j >= 0; j = j - 1) {
        str += '.' + d.split('.').reverse()[i-j];
        strMeh += d.split('.').reverse()[j] + '.'
      }
      if (strArray.indexOf(str) === -1) {
        strArray.push(str);
        strMehArray.push(strMeh.substring(0, strMeh.length-1));
      }
    }
  })
  strMehArray.forEach((element, index) => {
    let cnt = 0;
    domains.forEach( compareElem => {
      if (compareElem.includes(element)) {
        cnt = cnt + 1;
      }
    })
    result[strArray[index]] = cnt;
  })
  return result
}

module.exports = {
  getDNSStats
};
