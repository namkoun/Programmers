function solution(myString, pat) {
    var answer = '';
    let aa = myString.lastIndexOf(pat)
    for(let i = aa+pat.length-1 ;i>=0;i--){
        answer += myString[i]
    }
    return answer.split("").reverse().join("");
}