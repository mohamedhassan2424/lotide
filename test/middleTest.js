const middle=require('../middle');
const assertArrayEqual=require('../assertArrayEqual');
const eqArrays=require('../eqArrays');
const assert=require('chai').assert;

describe("#middle", () => {
    it("returns 2 for [1, 2, 3]", () => {
      assert.strictEqual(middle([1, 2, 3]), 2);
    });
    it("returns '3' for ['1','2','3','4,'5']", () => {
        assert.strictEqual(middle([1,2,3,4,5]), 3); 
      });
      it("returns '2' and '3' for ['1','2','3','4]", () => {
        assert.strictEqual(middle([1,2,3,4]), [2,3]); 
      });
      it("returns '2' and '3' for ['1','2','3','4','5','6']", () => {
        assert.strictEqual(middle([1,2,3,4,5,6]), [3,4]); 
      });
      it("returns undefined when their is know middle value ['1']", () => {
        assert.isUndefined(middle([1])); 
      });
      it("returns undefined when their is know middle value ['1','2']", () => {
        assert.isUndefined(middle([1,2])); 
      });

  });
/*console.log(middle([1]) )
console.log(middle([1, 2]))

console.log(middle([1, 2, 3]))
console.log(middle([1, 2, 3, 4, 5]))

console.log(middle([1, 2, 3, 4]) )
console.log(middle([1, 2, 3, 4, 5, 6]) )

console.log(eqArrays([1, 2,3], [1, 2, 3]));
console.log(eqArrays([13, 4,4], [14, 6, 4]));*/