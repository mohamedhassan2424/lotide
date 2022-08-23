const assertEqual = function(actual, expected) {
    if(actual===expected){
    console.log(`Assertion Passed: ${actual} === ${expected}`);
    }else {
        console.log(`Assertion Passed: ${actual} === ${expected}`);
    }
    };
    const tail=function(value){
        return value.slice(1)
    };
   
 const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);