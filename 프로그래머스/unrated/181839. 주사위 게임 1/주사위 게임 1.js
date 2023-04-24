function solution(a, b) {
    var answerA = a % 2;
    var answerB = b % 2;
    var answer = 0
    
    if(answerA == 1 && answerB == 1){
        answer = a**2 + b**2
    }else if(answerA == 1 || answerB == 1){
        answer = 2 * (a + b)
    }else{
        answer = Math.abs(a - b)
    }
    return answer;
}