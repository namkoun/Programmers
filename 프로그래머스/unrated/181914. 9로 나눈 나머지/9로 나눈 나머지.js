function solution(number) {
    var answer = number.split("")
    var answer1 = 0
    
    for(let i=0;i<answer.length;i++){
        answer1 += answer[i] *1
    }
    return answer1 %9
}