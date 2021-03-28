const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  str = String(str);

  if (options.addition !== undefined) {
  options.addition = String(options.addition);
  }


  if (options.repeatTimes === undefined) {
  options.repeatTimes = 1
  }
  if (options.additionRepeatTimes === undefined) {
  options.additionRepeatTimes = 1
  }

  if (options.separator === undefined) {
  options.separator = "+"
  }

  if (options.additionSeparator === undefined) {
  options.additionSeparator = '|'
  }
  if (options.addition !== undefined) {
  let newstr = [str + options.addition];
  for (let i = 1; i < options.additionRepeatTimes; i++) {

    newstr.push(options.addition)
  }
  str = newstr.join(options.additionSeparator);

  }


  let  ans = [];
  for (let i = 0; i < options.repeatTimes; i++) {

  ans.push(str)
  }
  ans = ans.join(options.separator);


  return (ans)


};