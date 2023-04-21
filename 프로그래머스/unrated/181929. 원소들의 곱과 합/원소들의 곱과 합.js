function solution(num_list) {
    var answer = 0;
    var answer1 = 1;
    for(let i = 0; i< num_list.length;i++){
       answer = num_list[i] + answer
       answer1 = num_list[i] * answer1
    }
    if(answer ** 2 < answer1){
       return 0;
    }else{
        return 1;
    }
    
}