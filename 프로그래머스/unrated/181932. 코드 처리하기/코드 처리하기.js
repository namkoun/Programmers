function solution(code) {
    var answer = code.split("");
    var answer1 = ""
    var mode = 0
    
    
    for(let i = 0; i< answer.length;i++){
          if(answer[i] == 1){
                mode++
              continue;
          }
            if(mode % 2 ==0){
                if(i % 2 == 0){
                    answer1 = answer1 + answer[i]
                }
            }else{
                if(i % 2 == 1){
                    answer1 = answer1 + answer[i]
   
                }
            }
        
       
    }
    if(answer1 == ""){
        answer1 = "EMPTY"
    }
    return answer1;
}