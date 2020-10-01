const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let selfScope = this;
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] == "object") {
        let depth = 1 + selfScope.calculateDepth(arr[i], result);
        result = Math.max(result, depth);
      }
    }
    return result;
  }
};
