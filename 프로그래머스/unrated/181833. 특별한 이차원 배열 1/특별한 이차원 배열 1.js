function solution(n) {
    var answer = [];
    for(let i =0; i<n; i++){
        let a = []
        for(let k =0; k<n; k++){
            a.push(0)
        }   
        a[i] = 1
        answer.push(a)
    }
    return answer;
}