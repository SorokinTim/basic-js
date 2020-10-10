const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainsArray: [],
  getLength() {
    return this.chainsArray.length;
  },
  addLink(value = '') {
    this.chainsArray.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    if (!isNaN(position) && this.chainsArray[position - 1]) {
      this.chainsArray.splice(position - 1, 1);
    } else {
      this.chainsArray = [];
      throw new Error("Something went wrong!");
    }
    return this;
  },
  reverseChain() {
    this.chainsArray.reverse();
    return this;
  },
  finishChain() {
    let result = this.chainsArray.join("~~");
    this.chainsArray = [];
    return result;
  }
};

module.exports = chainMaker;
