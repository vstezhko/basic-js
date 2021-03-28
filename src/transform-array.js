const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  let result_arr = [];
  if (arr.length === 0) {
    return result_arr;
  }
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        result_arr.pop();
        break;
      case '--double-next':
        result_arr.push(arr[i++]);
        break;
      case '--double-prev':
        result_arr.push(arr[i--]);
        break;
      default:
        result_arr.push(arr[i]);
    }
  }
  return result_arr;
};
