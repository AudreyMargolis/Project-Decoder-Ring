// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");
describe("my caesar() Tests", () => {
      it("Should handle multiple spaces", () =>{
        const message = "a new message";
        const actual = caesar(message, 3);
        const expected = "d qhz phvvdjh";

        expect(actual).to.equal(expected);
      });
      it("Should return false if shift is 0", () => {
        const message = "my message";
        const shift = 0;
        const actual = caesar(message, shift);
    
        expect(actual).to.be.false;
      });
      it("Should return false if shift is above 25", () => {
        const message = "random message";
        const shift = 26;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
      });
      it("Should return false if shift is less than -25", () => {
        const message = "random messaage";
        const shift = -26;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
      });
      it("Should ignore capital letters", () => {
        const message ="Zack"
        const shift = 25
        const expected = "yzbj"
        const actual = caesar(message, shift);
        expect(actual).to.equal(expected);
      })
      it("Should handle shifts that go past the end of the alphabet", () => {
          const message ="zack"
          const shift = 25
          const expected = "yzbj"
          const actual = caesar(message, shift);
          expect(actual).to.equal(expected);
      })
      it("Should maintain other characters like !", ()=>{
        const message ="zack!"
        const shift = 25
        const expected = "yzbj!"
        const actual = caesar(message, shift);
        expect(actual).to.equal(expected);
      })
  });