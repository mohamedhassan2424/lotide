const tail =require('../tail');
const assertEqual= require('../assertEqual');
const assert=require('chai').assert;


describe("#tail", () => {
    it("returns Labs for ["Hello", "Lighthouse", "Labs"]", () => {
      assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]), "Labs");
    });
    it("returns '5' for ['5']", () => {
      assert.strictEqual(tail(['5']), '5'); 
      });
  });
  
/*const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
assertEqual(result.length,2);
assertEqual(result[0],"Lighthouse")
assertEqual(result[1],"Labs")
const words = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(words, ["Yo Yo", "Lighthouse", "Labs"]);*/