const assertEqual = function(actual, expected) {
    if(actual===expected){
    console.log(`Assertion Passed: ${actual} === ${expected}`);
    }else {
        console.log(`Assertion Passed: ${actual} === ${expected}`);
    }
    };
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

    const eqObjects= function(object1,object2){
        let keyValue1=Object.keys(object1);
        let keyValue2=Object.keys(object2);
        
        if(keyValue1.length !== keyValue2.length){
            return false;
        }
        for(let keys1 of keyValue1){
            console.log(keys1)
            const abstractedValue1=keyValue1[keys1]
            const abstractedValue2=keyValue2[keys1]
            if(Array.isArray(abstractedValue1) || Array.isArray(abstractedValue2)){
                if(!eqArrays(abstractedValue1,abstractedValue2)){
                    return false;
                }else if (abstractedValue1!== abstractedValue1){
                    return false;
                }
            }
            return true;
            }
        };

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); 

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); 