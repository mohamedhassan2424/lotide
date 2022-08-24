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

const assertArraysEqual= function(actual,expected){
    if(eqArrays(actual,expected)){
        console.log(`Assertion Passed: ${actual} === ${expected}`);
        }else {
            console.log(`Assertion Passed: ${actual} === ${expected}`);
        }
        };
        
const without= function(source,itemsToRemove){
for(let i=0; i<source.length; i++){
    for (let j=0; j<itemsToRemove;j++){
        if(source[i]===itemsToRemove[j]){
            source.splice(i,1);
        }
    }
}
return source;
}

console.log(assertArraysEqual(without([1,2,3], [1]), [2,3]));
console.log(assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]));
console.log(eqArrays([1, 2,3], [1, 2, 3]));
console.log(eqArrays([13, 4,4], [14, 6, 4]));