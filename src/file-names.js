const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names.length === 0) return [];

  let result = [];
  
  result.push(names[0])
  for (let i = 1; i < names.length; i ++){
    let nextIndex = 0;
    let currentCount = 0;
    let resultName = names[i]
    let stopCycle = 0;
    // is in names?
    if (names.indexOf(resultName) !== -1) {
      // if no - 
      currentCount++;
      while (names.indexOf(resultName, nextIndex) !== i) {
        currentCount = currentCount + 1;
        nextIndex = names.indexOf(resultName, nextIndex) + 1;
        stopCycle ++;
        if (stopCycle >= 4) break;
      }
      currentCount++;
    }
    resultName = resultName + `(${currentCount - 2})`.repeat(currentCount > 2 ? 1 : 0);
     nextIndex = 0;
     currentCount = 0;

    if (result.indexOf(resultName) !== -1) {
      currentCount++;
      while (result.indexOf(resultName, nextIndex) !== -1) {
        currentCount = currentCount + 1;
        nextIndex = result.indexOf(resultName, nextIndex) + 1;
        stopCycle ++;

        if (stopCycle >= 4) break;
      }
      currentCount++;

      resultName = resultName + `(${currentCount - 2})`.repeat(currentCount >2  ? 1 : 0);

    }
    result.push(resultName)
  }

  return result;
}

module.exports = {
  renameFiles
};
