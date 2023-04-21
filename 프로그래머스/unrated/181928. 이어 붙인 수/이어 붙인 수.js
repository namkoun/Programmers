function solution(num_list) {
    var answer = 0;
    var answer1 = 0;
    for(let i=0; i<num_list.length;i++){
        if(num_list[i] % 2 == 0 ){
            answer1 = answer1 + num_list[i] + ""
        }else{
            answer = answer + num_list[i] + ""
        }
    }
    return Number(answer) + Number(answer1) ;
}