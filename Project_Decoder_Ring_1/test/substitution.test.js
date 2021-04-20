const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("My substitution() tests", ()=>{
    it("Should return false if alphabet is not exactly 26 characters", ()=>{
      const message = "message";
      const alphabet = "abcdefghijk";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    })
    it("Should correctly translate phrase", ()=>{
        const message = "message"
        const alphabet = "zxywvutsrqponmlkjihgfedcba"
        const expected = "nvhhztv"
        const actual = substitution(message, alphabet);
        expect(actual).to.equal(expected);
    })
    it("Should return false if any duplicate characters are given", ()=>{
         const message = "message"
         const alphabet = "zzxxyygghhiinnllmmkkoojjhh"
         const actual = substitution(message, alphabet);
         expect(actual).to.be.false;
    })
    it ("Should maintain spaces in message",()=>{
        const message = "a message"
        const alphabet = "zxywvutsrqponmlkjihgfedcba"
        const expected = "z nvhhztv"
        const actual = substitution(message, alphabet);
        expect(actual).to.equal(expected);
    })
    it ("Should ignore capital letters in message", () =>{
        const message = "A message"
        const alphabet = "zxywvutsrqponmlkjihgfedcba"
        const expected = "z nvhhztv"
        const actual = substitution(message, alphabet);
        expect(actual).to.equal(expected);
    })
});
