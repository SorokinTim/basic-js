const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isReverseMachine = true) {
    this.isReverseMachine = isReverseMachine;
  }

  encrypt(message = null, key = null) {
    if (!message || !key) throw new Error("Not implemented");

    message = message.toLowerCase();
    key = key.toLowerCase();

    let alphabet = this.createAlphabetInUTF16();
    let resultArray = [];

    if (message.length > key.length) {
      let count = Math.ceil(message.length / key.length);
      key = key.repeat(count);
    }

    let x = 0;
    for (let i = x; i < message.length; i++) {
      if (message[i].charCodeAt(0) >= 97 && message[i].charCodeAt(0) <= 122) {
        resultArray.push(key[x].charCodeAt(0) - 97);
        x++;
      } else {
        resultArray.push(message[i]);
      }
    }

    for (let i = 0; i < resultArray.length; i++) {
      let temp = message[i].charCodeAt(0);
      if (
        isNaN(resultArray[i]) ||
        resultArray[i] === " " ||
        typeof resultArray[i] == "string"
      ) {
        continue;
      } else if (temp + resultArray[i] > 122) {
        let result = temp + resultArray[i] - 122 - 1;
        resultArray[i] = String.fromCharCode(result + 97);
      } else {
        resultArray[i] = String.fromCharCode(temp + resultArray[i]);
      }
    }

    return this.isReverseMachine
      ? resultArray.join("").toUpperCase()
      : resultArray.reverse().join("").toUpperCase();
  }

  createAlphabetInUTF16() {
    let objectWithAlphabet = {};

    // create array with format like letter: digit (UTF-16 code)
    for (let i = 97; i <= 122; i++) {
      objectWithAlphabet[String.fromCharCode(i)] = i;
    }

    return objectWithAlphabet;
  }

  decrypt(message = null, key = null) {
    if (!message || !key) throw new Error("Not implemented");

    message = message.toLowerCase();
    key = key.toLowerCase();

    let alphabet = this.createAlphabetInUTF16();
    let resultArray = [];

    if (message.length > key.length) {
      let count = Math.ceil(message.length / key.length);
      key = key.repeat(count);
    }

    let x = 0;
    for (let i = x; i < message.length; i++) {
      if (message[i].charCodeAt(0) >= 97 && message[i].charCodeAt(0) <= 122) {
        resultArray.push(key[x].charCodeAt(0) - 97);
        x++;
      } else {
        resultArray.push(message[i]);
      }
    }

    for (let i = 0; i < resultArray.length; i++) {
      let temp = message[i].charCodeAt(0);
      if (
        isNaN(resultArray[i]) ||
        resultArray[i] === " " ||
        typeof resultArray[i] == "string"
      ) {
        continue;
      } else if (temp - resultArray[i] < 97) {
        let result = resultArray[i] + (97 - temp);
        resultArray[i] = String.fromCharCode(122 - result + 1);
      } else {
        resultArray[i] = String.fromCharCode(temp - resultArray[i]);
      }
    }

    return this.isReverseMachine
      ? resultArray.join("").toUpperCase()
      : resultArray.reverse().join("").toUpperCase();
  }
}


module.exports = VigenereCipheringMachine;
