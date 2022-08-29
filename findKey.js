 
   
    const findKey= function(objectValue,callBackFunction){
        for(let objectKeys1 in objectValue){
            if(callBackFunction(objectValue[objectKeys1])){
                return objectKeys1;
            }
            }
            

        };
        const runningCode= findKey({
            "Blue Hill": { stars: 1 },
            "Akaleri":   { stars: 3 },
            "noma":      { stars: 2 },
            "elBulli":   { stars: 3 },
            "Ora":       { stars: 2 },
            "Akelarre":  { stars: 3 }
          }, x => x.stars === 2)

    
      console.log(runningCode);


      