const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let valuedMembers = [];
  if (members instanceof Array) {
    members.forEach((member, index) => {
      if (typeof member === 'string'){
        valuedMembers.push(members[index].trim().substring(0, 1).toUpperCase());
      }
    })
    if (valuedMembers.length === 0) {
      return false;
    }
    return valuedMembers.sort().join('');
  }
  return false;
}

module.exports = {
  createDreamTeam
};
