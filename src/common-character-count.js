const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  console.log(s1, s2);
  for(let i = 0; i < s1.length; i++){
    for(let k = 0; k < s2.length; k++ ){
      if(s1[i] === s2[k]){ 
        console.log('123');
        s1 = s1.replace(s1[i], '');
        s2 = s2.replace(s2[k], '');
        count++;
      }
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
