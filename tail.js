const assertEqual= require('./assertEqual')
    const tail=function(value){
        return value.slice(1);
    };
   
module.exports=tail;
    //const result = tail(["Hello", "Lighthouse", "Labs"]);
    //assertEqual(result, ["Lighthouse", "Labs"]);