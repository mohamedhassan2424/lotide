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
    


const letterPosistions=function(sentences){
    const results={};
    
    for(let i=0;i<sentences.length;i++){
        let eachLetter=sentences[i]
        if(eachLetter ===' '){
            continue;
        }else if(!results[eachLetter]){
            results[eachLetter]=[i]
        }else{
            results[eachLetter].push(i);
        }
    }
    return results;
};

console.log(letterPosistions("Testing the Function code here again."));
assertArraysEqual(letterPosistions("hello"), [1]);