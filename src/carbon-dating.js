const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample( a ) {
  if (typeof a !== 'string') return false;
  let num = parseFloat(a);
  if ( num !== NaN && typeof num === 'number' && num > 0 && num < 15 ) {
    const ln2 = 0.693;
    const k = Math.LN2/HALF_LIFE_PERIOD;
    const time = Math.log(MODERN_ACTIVITY/num) / k;
    return Math.ceil(time);
  }
  return false;
}

module.exports = {
  dateSample
};
