const tail =require('../tail');
const assertEqual= require('../assertEqual');



describe("#tail", () => {
    it("returns Labs for ["Hello", "Lighthouse", "Labs"]", () => {
      assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), "Labs");
    });
    it("returns '5' for ['5']", () => {
        assert.deepEqual(tail(['5']), '5'); 
      });
  });
  
/*const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
assertEqual(result.length,2);
assertEqual(result[0],"Lighthouse")
assertEqual(result[1],"Labs")
const words = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(words, ["Yo Yo", "Lighthouse", "Labs"]);*/