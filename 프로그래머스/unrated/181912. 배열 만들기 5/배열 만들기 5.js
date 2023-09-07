function solution(intStrs, k, s, l) {
    var answer = [];
    
    for(let i = 0; i<intStrs.length;i++){
        
        let aaa = intStrs[i].substr(s,l)
        if(k < aaa){
            answer.push(aaa*1)
        }
    }
    
    
    return answer;
}