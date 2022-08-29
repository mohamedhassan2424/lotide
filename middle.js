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
module.exports=middle;
