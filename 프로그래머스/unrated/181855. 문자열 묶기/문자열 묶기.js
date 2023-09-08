function solution(strArr) {
    var answer = Array.from({length:30},(v,i)=>i=0);
    for(let i= 0;i<strArr.length;i++){
        let a = strArr[i].length
        answer[a -1] = answer[a -1] + 1
    }
    return Math.max.apply(null, answer);
}