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
 * -+
 *   
 */
function getSeason(date) {
  console.log(date);
  const month = date.getMonth();
  let result;
  // let validData = date.split("-");
  // validData[1] -= 1;

  // let newData = new Date(validData[2], validData[1], validData[0]);

  // if(newData.getFullYear() == validData[2] && newData.getMonth() == validData[1] && newData.getDate() == validData[0]){
  
      switch(month){
        case 11:
        case 0:
        case 1:
          result = 'winter'
          break 
        case 2:
        case 3:
        case 4:
          result = 'spring'
          break
        case 5:
        case 6:
        case 7:
          result = 'summer'
          break
        case 8:
        case 9:
        case 10:
          result = 'autumn'
          break
        case null:
          result = 'Unable to determine the time of year!'
          break
      }
      return result;

  // } return `Invalid date!`;
}

module.exports = {
  getSeason
};
