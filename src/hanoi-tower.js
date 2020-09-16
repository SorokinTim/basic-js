const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {};

  result.turns = 2 ** disksNumber - 1;
  result.seconds = Math.floor(result.turns / (turnsSpeed / 3600));

  return result;
}
