const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  str = str.split('');
  console.log(str);
  let newArr = [];
  let count;
  let key;

  for(let i = 0; i < str.length; i++){
    count = 1;
    if(str[i] === str[i + 1])  continue;

    for(let k = 0; k < str.length; k++){
      if(str[k] != str[k + 1]) {
        key = str[i];
        continue;
        }else if(str[i] === str[k]){
          count++;
          key = str[k];
        }
       
    }
    newArr.push(count, key);
  }
  return newArr.join('').replace(/1/g, '');
}

module.exports = {
  encodeLine
};
