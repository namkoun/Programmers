function solution(a, b) {
    var answer = a+""+b
    var answer1 = 2 * a * b;
    
    if(answer*1 < answer1){
        return answer1
    }else if(answer*1 == answer1){
        return answer * 1
    }else{
           return answer * 1
    }
    
}