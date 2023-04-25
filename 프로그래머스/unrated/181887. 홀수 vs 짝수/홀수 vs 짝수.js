function solution(num_list) {
    var answer = 0;
    var answer1 = 0;
    for(let i=0;i<num_list.length;i++){
        if(i % 2 == 0){
            answer += num_list[i]
        }else{
            answer1 += num_list[i]
        }
    }
   

    if(answer < answer1){
    return answer1    
    }
    return answer;
}