// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function outOfBound(charCode){
    if (charCode > 122)
    {
      let over = charCode%122;
      charCode = 96 + over;
    }
    else 
    {
      let under = 96 - charCode;  
      charCode = 122 - under;
    
    }
    return charCode;
  }
  function caesar(input, shift, encode = true) {
    // your solution code here
    if(shift === 0 || shift >25 || shift <-25)
      return false;
    
    let loweredCase = input.toLowerCase();
    let result = '';
    
    for (let i =0; i <loweredCase.length; i ++)
    {
      
      //check if char is a lower case letter
      if (loweredCase.charCodeAt(i) <123 && loweredCase.charCodeAt(i) > 96){
        let charShift;
        if (encode){
          charShift = loweredCase.charCodeAt(i) + shift;
        }
        else{
          charShift = loweredCase.charCodeAt(i) - shift;
        }
        if(charShift > 122 || charShift < 97)
          charShift = outOfBound(charShift);
        
        result += (String.fromCharCode(charShift));
      }
      else{
        
        result +=loweredCase[i];
      }
    }
    
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
