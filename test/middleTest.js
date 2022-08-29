const middle=require('../middle');
const assertArrayEqual=require('../assertArrayEqual');
const eqArrays=require('../eqArrays');


console.log(middle([1]) )
console.log(middle([1, 2]))

console.log(middle([1, 2, 3]))
console.log(middle([1, 2, 3, 4, 5]))

console.log(middle([1, 2, 3, 4]) )
console.log(middle([1, 2, 3, 4, 5, 6]) )

console.log(eqArrays([1, 2,3], [1, 2, 3]));
console.log(eqArrays([13, 4,4], [14, 6, 4]));