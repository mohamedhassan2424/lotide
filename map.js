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
// AssertArratEqual and eqArray are found above
//the map.js code is written below
const assertArrayEqual= function(actual,expected){
    if(eqArrays(actual,expected)){
        console.log(`Assertion Passed: ${actual} === ${expected}`);
        }else {
            console.log(`Assertion Passed: ${actual} === ${expected}`);
        }
        };




const words = ["ground", "control", "to", "major", "tom"];
const map= function(array,callback){
    //console.log('array',array);
    //console.log('callback',callback);
    
    const results=[];
    for(let item of array){
        results.push(callback(item))
        //console.log('item BEFORE: ', item);
       // console.log('item AFTER: ', callback(item));
       // console.log('---');
    }
    return results;
}
const results1= map(words, word=>word[0]);
console.log(results1);