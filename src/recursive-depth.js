const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let instance = this;
    return Array.isArray(arr) ? 1 + arr.reduce(function (acc, currentValue) {
      return Math.max(acc, instance.calculateDepth(currentValue));
    }, 0) : 0;
  };
};
