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
  console.log(n); 
  let num = String(n.split(''));
  for(let i = 0; i < num.length; i++){
    
  }
}

module.exports = {
  deleteDigit
};
