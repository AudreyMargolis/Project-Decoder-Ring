// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function generateKey (alphabetKey){
    return {
      a : `${alphabetKey[0]}`, b : `${alphabetKey[1]}`, c : `${alphabetKey[2]}`, d : `${alphabetKey[3]}`, 
      e : `${alphabetKey[4]}`, f : `${alphabetKey[5]}`, g : `${alphabetKey[6]}`, h : `${alphabetKey[7]}`,
      i : `${alphabetKey[8]}`, j : `${alphabetKey[9]}`, k : `${alphabetKey[10]}`, l : `${alphabetKey[11]}`,
      m : `${alphabetKey[12]}`, n : `${alphabetKey[13]}`, o : `${alphabetKey[14]}`, p : `${alphabetKey[15]}`,
      q : `${alphabetKey[16]}`, r : `${alphabetKey[17]}`, s : `${alphabetKey[18]}`, t : `${alphabetKey[19]}`,
      u : `${alphabetKey[20]}`, v : `${alphabetKey[21]}`, w : `${alphabetKey[22]}`, x : `${alphabetKey[23]}`,
      y : `${alphabetKey[24]}`, z : `${alphabetKey[25]}`
    }
  }
  function isUnique(str) {
    return new Set(str).size == str.length;
  }
  function getKeyByValue (object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet || alphabet.length !==26 || !isUnique(alphabet))
      return false;
    const encodeKey = generateKey(alphabet);
    const lowerCase = input.toLowerCase();
    let result ='';
    if(encode){
      for(let i = 0; i<input.length; i++){
        if(lowerCase[i] === " ")
          result += " "
        else
        result += encodeKey[lowerCase[i]];
      }
    }
    else
    {
      for(let i = 0; i<input.length; i++){
        if(lowerCase[i] === " ")
          result += " "
        else
        result += getKeyByValue(encodeKey, lowerCase[i]);
      }
      
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
