const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {

  let foundCats = 0;

  backyard.forEach((array) => {
    array.forEach((item) => {
      if (item === "^^") foundCats += 1;
    });
  });

  return foundCats;

}
