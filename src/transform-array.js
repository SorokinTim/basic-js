const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("It isn\'t array!");
  }

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        if(i == arr.length - 1 || arr[i+2] == "--discard-prev") continue;
        i++;
        break;
      case "--discard-prev":
        if(i == 0) continue;
        newArr.pop();
        break;
      case "--double-next":
        if(i == arr.length - 1) continue;
        newArr.push(arr[i + 1]);
        break;
      case "--double-prev":
        if(i == 0 || arr[i-2] == "--discard-next") continue;
        newArr.push(arr[i - 1]);
        break;
      default:
        newArr.push(arr[i]);
        break;
    }
  }
  return newArr;
}
