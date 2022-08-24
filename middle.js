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

const middle= function(arrayValue){
    if(arrayValue.length <3){
        return console.log("Their is know middle value");
    }else if(arrayValue.length %2===0) {//checking to see if it has no reminder meaing that we it is even and will have two middle numbers
       return arrayValue.slice(arrayValue.length/2-1, arrayValue.length/2+1)
    }else{
    let arrayCreated=[];
    let numberMiddle= Math.round(arrayValue.length/2)
    arrayCreated.push(arrayValue[numberMiddle-1]);
    return arrayCreated;

    }   
}
console.log(middle([1]) )
console.log(middle([1, 2]))

console.log(middle([1, 2, 3]))
console.log(middle([1, 2, 3, 4, 5]))

console.log(middle([1, 2, 3, 4]) )
console.log(middle([1, 2, 3, 4, 5, 6]) )

console.log(eqArrays([1, 2,3], [1, 2, 3]));
console.log(eqArrays([13, 4,4], [14, 6, 4]));