const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str = '', options = {}) {
  if(str === undefined) {
    throw new Error("Something went wrong!")
  } else {
    str = String(str);
    if (options.addition !== undefined) {
      options.addition = String(options.addition);
    }
  }


  if(options.repeatTimes) {
    str = repeatWithseparator(str, options.repeatTimes || 1, options.separator || "+");
  }

  if(options.addition || options.additionSeparator) {
    str = addAdditions(str, options).join('')
  }

  return str;
};

function cutString(str, length) {
  return str.match(new RegExp('.{'+ (length-1) +',' + length + '}', 'g'));
}

function repeatWithseparator(str, repeatTimes, separator) {

  let tempLength = str.length;
  str = str.repeat(repeatTimes);
  let resultArray = cutString(str, tempLength);
  str = resultArray.join(separator || "+");

  return str
}

function addAdditions(str, options) {
  // let array = str.split(new RegExp("(" + shieldSeparator(options.separator) + ")", 'g'));
  let array = str.split(new RegExp("(" + shieldSeparator(options.separator) + ")", 'g'))
  if(!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }

  let result = array.map(item => {
    if(item != options.separator) {
      for(let i = 0; i < options.additionRepeatTimes; i++) {
        item = item + (options.addition || "");
        if(i < options.additionRepeatTimes - 1) {
          item = item + (options.additionSeparator || "");
        }
      }
    }
    return item
  })

  return result;
}

function shieldSeparator(separator) {
  let result = [];
  for(let letter of separator) {
    if(!letter.match(/[a-z0-9]/i)) {
      result.push("\\" + letter);
    } else {
      result.push(letter);
    }
  }
  return result.join('');
}
