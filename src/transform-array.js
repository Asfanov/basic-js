const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let newArr = [];
     if(arr.flat(Infinity).length == 0) return [];

    newArr.push(arr);

      if(Array.isArray(newArr) === true){
        for(let i = 0; i < newArr.length; i++){
          if(newArr[i] === `--discard-next`){
          newArr.splice(arr[i], 2);
          } else if(arr[i] === `--discard-prev`){
            newArr.splice(newArr[i] - 1, newArr[i]);
           } 
            else if(arr[i] === `--double-next`){
              newArr.splice(newArr[i], 0, newArr[i + 1]);
            } else if(arr[i] === `--double-prev`){
              newArr.splice(newArr[i], 0, newArr[i - 1]);
            } 
        } return newArr;
     } 
     return `'arr' parameter must be an instance of the Array!`
}


module.exports = {
  transform
};
