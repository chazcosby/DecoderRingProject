const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;
    if (!uniqueChars(alphabet)) return false;
    const standardAlph = "abcdefghijklmnopqrstuvwxyx";
    let result = "";
    for (let letter in input) {
      if (input[letter] === " ") {
        result += input[letter];
        continue;
      }
      if (encode) {
        let index = standardAlph.indexOf(input[letter]);
        result += alphabet[index];
      } else {
        let index = alphabet.indexOf(input[letter]);
        result += standardAlph[index];
      }
    }
    return result;
  }

  // Small helper function to check if the given alphabet is entirely unique
function uniqueChars(input) {
  return new Set(input).size == input.length;
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
