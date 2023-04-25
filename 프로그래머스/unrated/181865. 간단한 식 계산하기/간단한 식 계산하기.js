function solution(binomial) {
    var answer = binomial.split(" ");
    var answer1 = 0
    if(answer[1] == "+"){
         answer1 = (answer[0] * 1) + (answer[2] * 1)
    }else if(answer[1] == "-"){
         answer1 = (answer[0] * 1) - (answer[2] * 1)
    }else if(answer[1] == "*"){
         answer1 = (answer[0] * 1) * (answer[2] * 1)
    }
    return answer1;
}