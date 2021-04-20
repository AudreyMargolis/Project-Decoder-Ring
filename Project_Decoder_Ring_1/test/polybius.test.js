const { expect } = require("chai");
const { polybius } = require("../src/polybius");

// Write your tests here!
describe ("My polybius tests", () =>{
    it ("Should translate i to 42", () =>{
        const message = "i";
        const expected = "42";
        const actual = polybius(message);
        expect(actual).to.equal(expected);
    })
    it ("Should translate j to 42", () =>{
        const message = "j";
        const expected = "42";
        const actual = polybius(message);
        expect(actual).to.equal(expected);
    })
    it ("Should decode 42 to i/j", () =>{
        const message = "42";
        const expected = "i/j";
        const actual = polybius(message, false);
        expect(actual).to.equal(expected);
    })
    it ("Should ignore capital letters", ()=>{
        const message = "J";
        const expected = "42";
        const actual = polybius(message);
        expect(actual).to.equal(expected);
    })
    it ("Should ignore capital letters", ()=>{
        const message = "J";
        const expected = "42";
        const actual = polybius(message);
        expect(actual).to.equal(expected);
    })
    it("should leave spaces as is", () => {
        const message = "my message";
        const actual = polybius(message);
        const expected = "2345 23513434112251";
  
        expect(actual).to.equal(expected);
      });
});
