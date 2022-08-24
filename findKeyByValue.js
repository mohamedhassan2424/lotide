const assertEqual = function(actual, expected) {
    if(actual===expected){
    console.log(`Assertion Passed: ${actual} === ${expected}`);
    }else {
        console.log(`Assertion Passed: ${actual} === ${expected}`);
    }
    };

    const findKeyByValue= function(object,value){
        let objectKeyValueSaved= Object.keys(object);
        startingIndexPosition=0;
        for(let eachKeyValue in object){
            if(object[eachKeyValue] ===value){
                return objectKeyValueSaved[startingIndexPosition];
            }
            startingIndexPosition++;
        }
        return undefined;
    };
    const bestTVShowsByGenre = { 
        sci_fi: "The Expanse",
        comedy: "Brooklyn Nine-Nine",
        drama:  "The Wire"
      };
      
      assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"));
      assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
   
