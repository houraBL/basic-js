const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let fixedOptions;
  fixedOptions = {...options} || {}
  fixedOptions.repeatTimes = typeof options?.repeatTimes === 'number' ? options.repeatTimes : 1;
  fixedOptions.separator = options?.separator ? String(options.separator) : '+';
  fixedOptions.addition = (typeof options?.addition === 'string' 
    || typeof options?.addition === 'boolean'
    || typeof options?.addition === 'object') ? String(options.addition) : '';
  
  fixedOptions.additionRepeatTimes = typeof options?.additionRepeatTimes === 'number' ? options.additionRepeatTimes : 1;
  fixedOptions.additionSeparator = typeof options?.additionSeparator === 'string' ? (options.additionSeparator).toString() : '|';

  
  let finalAddition = [];
  for (let i = 0; i < fixedOptions.additionRepeatTimes; i++) {
    finalAddition.push(fixedOptions.addition)
  }

  let finalStr = String(str) + finalAddition.join(fixedOptions.additionSeparator);
  let result = []
  for (let i = 0; i < fixedOptions.repeatTimes; i++)   {
    result.push(finalStr);
  }


  return result.join(fixedOptions.separator);

}

module.exports = {
  repeater
};
