function solution(num_list) {
    var answer = 0;
     if(num_list.length >= 11){
        answer = num_list.reduce(function add(sum, currValue) {
            return sum + currValue;
        }, 0);
    }else{
           answer = 1
        for(let i=0;i<num_list.length;i++){
            answer = num_list[i] * answer
        }
    }
    return answer;
}