const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members && Array.isArray(members)) {
    let namesArray = [];
    members.forEach((item) => {
      if (typeof item == "string") {
        let trimmedItem = item.trim();
        namesArray.push(trimmedItem[0].toUpperCase());
      }
    });
    return namesArray.sort().join("");
  } else {
    return false;
  }
};
