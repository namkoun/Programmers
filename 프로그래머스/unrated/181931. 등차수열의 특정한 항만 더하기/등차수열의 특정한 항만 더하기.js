function solution(a, d, included) {
    var answer = 0
    var answer1 = a
    for(let i=0;i<included.length;i++){
        if(included[i] == true){
          answer += answer1
        }
        answer1 += d
    }
    return answer;
}