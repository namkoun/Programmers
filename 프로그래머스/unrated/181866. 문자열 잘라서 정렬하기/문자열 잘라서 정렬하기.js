function solution(myString) {
    var answer = myString.split("x").sort();
    answer = answer.filter(i => i.length !== 0)
    return answer;
}