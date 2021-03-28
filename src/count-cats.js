const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  // throw new CustomError('Not implemented');
  let count=0;
  // throw new CustomError('Not implemented');
  for ( let row of matrix){
    for (let elem of row){
      if (elem === "^^") {
        count = count + 1;
      }
    }
  }
  return count



};
