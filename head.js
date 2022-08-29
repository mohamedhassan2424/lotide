const assertEqual=require('./assertEqual');
    
const head=function(value){
    return value[0];
};

module.exports=head;
//assertEqual(head([5,6,7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");