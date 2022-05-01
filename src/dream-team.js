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
  let arr = [];
  let result;
  if(Array.isArray(members)){
      for(let i = 0; i < members.length; i++){
        if (typeof members[i] != 'string') continue;
        else if (members.length === 0) return 0;
        else{
          members[i] = members[i].trim();
          arr.push(members[i].slice(0, 1).toUpperCase());
        }
      }     
  result = arr.sort().join('');
  return result;
    }
    return 0;
}

module.exports = {
  createDreamTeam
};
