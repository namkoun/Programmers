function solution(t, p) {
    var answer = t.split("");
    var answer1 = [];
    var answer2 = 0;
    for(let i =0; i<answer.length - (p.length - 1); i++){
           let ss = ""
           for(let ii = 0; ii<p.length;ii++){
              ss += answer[i + ii]
           }
        answer1.push(ss)
    }
  
    for(let i=0;i< answer1.length;i++){
        
        if(answer1[i] * 1 <= p * 1){
            answer2++
        }
        
        
    }
    
    
    
    return answer2;
}