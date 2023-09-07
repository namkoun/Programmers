function solution(myStr) {
    var answer = []
    var asdf = "";
    for(let i= 0; i <myStr.length; i++ ){
       if(myStr[i] == "a"){
           answer.push(asdf);
           asdf = "";
       }else if(myStr[i] == "b"){
            answer.push(asdf);
           asdf = "";
       }else if(myStr[i] == "c"){
            answer.push(asdf);
           asdf = "";
       }else{
           asdf += myStr[i]
       }
    }
    if(asdf.length !==0){
            answer.push(asdf);
        }
    answer = answer.filter(Boolean)
    if(answer.length == 0){
        answer.push("EMPTY");
    }
    return answer;
}