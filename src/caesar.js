const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift > 25 || shift < -25) {
      return false;
    }
    let result = "";
    input = input.toLowerCase();
    for (let i = 0; i < input.length; i++) {
      if (input[i].charCodeAt() < 97 || input[i].charCodeAt() > 122) {
        result += input[i];
        continue;
      }
      if (encode === true) {
        let charCode = input[i].charCodeAt() + shift;
        if (charCode > 122) {
          charCode -= 26;
        }
        if (charCode < 97) {
          charCode += 26;
        }
        let letterFromChar = String.fromCharCode(charCode);
        result += letterFromChar;
      } else {
        let charCode = input[i].charCodeAt() - shift;
        if (charCode > 122) {
          charCode -= 26;
        }
        if (charCode < 97) {
          charCode += 26;
        }
        let letterFromChar = String.fromCharCode(charCode);
        result += letterFromChar;
      }
    }
  
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

