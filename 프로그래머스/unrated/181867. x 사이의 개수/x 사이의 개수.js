function solution(myString) {
    var answer = myString.split("");
    answer.push("x")
    var answer1 = [];
    let a = 0 
    for(let i =0;i<answer.length;i++){
        if(answer[i] == "x"){
            answer1.push(a)
            a = 0;
        }else {
            a++
        }
    }
    return answer1;
}