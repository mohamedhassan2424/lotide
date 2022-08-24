const assertEqual = function(actual, expected) {
    if(actual===expected){
    console.log(`Assertion Passed: ${actual} === ${expected}`);
    }else {
        console.log(`Assertion Passed: ${actual} === ${expected}`);
    }
    };

    const countLetters= function(wordValue){
       const objectOfLetters={}
        wordValue=wordValue.replace(' ','');
        for(let letters of wordValue){
            if(objectOfLetters[letters]){
                objectOfLetters[letters]++;// if the letter exist in the object than we are adding an increment
            }else {
                objectOfLetters[letters]=1; // here where adding the value and a numericvalue to the objectOfLetter object
            }
        }
        return objectOfLetters;
    };
    console.log(countLetters("Testing code funtion here"));

