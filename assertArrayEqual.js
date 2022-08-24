const eqArrays= function(arrayValue1,arrayValue2){
    if(arrayValue1.length !==arrayValue2.length){
        return false;
    }
    for(let i=0; i<arrayValue1.length;i++){
        if(Array.isArray(arrayValue1[i]) &&(eqArrays(arrayValue1[i],arrayValue2[i]) === false)){
        return false;
    }
    if(!(Array.isArray(arrayValue1[i]))&& arrayValue1[i] !==arrayValue2[i]){
        return false
    }
}
    return true;
};

const asserArrayEqual= function(actual,expected){
    if(eqArrays(actual,expected)){
        console.log(`Assertion Passed: ${actual} === ${expected}`);
        }else {
            console.log(`Assertion Passed: ${actual} === ${expected}`);
        }
        };
        

console.log(eqArrays([1, 2,3], [1, 2, 3]));
console.log(eqArrays([13, 4,4], [14, 6, 4]));

