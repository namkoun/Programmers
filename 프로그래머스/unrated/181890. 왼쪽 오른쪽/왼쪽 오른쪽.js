function solution(str_list) {
    var answer = [];
    
    for(let i=0;i<str_list.length;i++){
        
        if(str_list[i] == "l"){
            for(let k=i;k >= 0;k--){
                answer.unshift(str_list[k])
            }
            answer.pop();
            return answer;
        }
        if(str_list[i] == "r"){
          for(let k=i;k <str_list.length;k++){
                answer.push(str_list[k])
            }
             answer.shift();
            return answer;
        }
        
        
    }
    
    
    return answer;
}