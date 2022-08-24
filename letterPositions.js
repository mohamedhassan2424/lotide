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