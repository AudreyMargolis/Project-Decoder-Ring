// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const grid = {
  11 : 'a', 21 : 'b', 31 : 'c', 41 : 'd', 51: 'e',
  12 : 'f', 22 : 'g', 32 : 'h', 42 : 'i/j', 52: 'k',
  13 : 'l', 23 : 'm', 33 : 'n', 43 : 'o', 53 : 'p',
  14 : 'q', 24 : 'r', 34 : 's', 44 : 't', 54 : 'u',
  15 : 'v', 25 : 'w', 35 : 'x', 45 : 'y', 55 : 'z'
  }
  function getKeyByValue (object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
  function codeToArray (input){
    let arr = [];
    for (let i = 0; i < input.length-1; i ++)
    {
      if(input[i] != " ")
      {
        arr.push(`${input[i]}${input[i+1]}`);
        i++;
      }
      else
        arr.push(" ");
    }
    return arr;
  }
  function polybiusEncode (input) {
    console.log(input);
    // if i or j
    let loweredCase = input.toLowerCase();
    let encodedMessage = '';
    for (let i = 0; i < loweredCase.length; i++){
      if (loweredCase[i] === 'i' || loweredCase[i] === 'j')
        encodedMessage += 42;
      else if(loweredCase[i] === ' ')
        encodedMessage += ' '
      else
        encodedMessage += getKeyByValue(grid, loweredCase[i]);
    }
    console.log(encodedMessage);
    return encodedMessage;
  }
  function polybiusDecode (input) {
    //even length check
    console.log(input.length);
    console.log(input.length % 2);
    if(input.length % 2 !== 0 && !input.includes(' '))
      return false;
    else if (input.length % 2 === 0 && input.includes(' '))
      return false;

    //turn to array
    let encodedArray = codeToArray(input);
    console.log(encodedArray);
    return decodedMessage = encodedArray.reduce((msg,encodedLetter) => {
        if(encodedLetter === " ")
          return msg + " ";
        else
          return msg + grid[encodedLetter];
    }, "")

  }
  function polybius(input, encode = true) {
    // your solution code here
    if(encode)
      return polybiusEncode(input);
    else
      return polybiusDecode(input);
  
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
