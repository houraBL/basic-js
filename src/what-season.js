const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let listOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (!date){
    return 'Unable to determine the time of year!'
  }
 
  if (Object.getOwnPropertyNames(date).length !==0) {
    throw new Error('Invalid date!');
  }

  if (date && date instanceof Date && !isNaN(date)) {
    
  
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    
    // for febr
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      listOfDays[1] = 29; 
    }

    if (day > listOfDays[month] || !(date instanceof Date) ) {
      throw new Error('Invalid date!');
    }

    console.log(date)
    let result = ''
    switch (month) {
      case 11:
      case 0:
      case 1:
        result = 'winter';
        break;
      case 2:
      case 3:
      case 4:
        result = 'spring';
        break;
      case 5:
      case 6:
      case 7:
        result = 'summer';
        break;
      case 8:
      case 9:
      case 10:
        result = 'autumn';
        break;
      default: 
        result = 'Unable to determine the time of year!'
        break;

    }
    return result
  } else {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
