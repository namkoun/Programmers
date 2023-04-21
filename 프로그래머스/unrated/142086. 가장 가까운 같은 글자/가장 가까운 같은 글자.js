function solution(s) {
    var answer = s.split("").reverse();
    var answer1 = []
    
    for(let i=0; i< answer.length;i++){
        let a = -1;
        let aa = 0;

        for(let j = i+1;j<answer.length;j++){
            aa++

            if(answer[i] == answer[j]){
                a = aa
                break;
            }
        }
        answer1.push(a)
    }
    
    return answer1.reverse();
}