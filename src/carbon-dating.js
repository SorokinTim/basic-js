const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let data = parseFloat(sampleActivity);
  if (data && typeof sampleActivity == "string" && data > 0 && data < MODERN_ACTIVITY) {
    let ln = Math.log(MODERN_ACTIVITY / data);
    let k = 0.693 / HALF_LIFE_PERIOD;

    return Math.ceil(ln / k);
  } else {
    return false;
  }
};
