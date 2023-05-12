function solution(n, control) {
    var answer = control.split("")
    let a = n;
    for(let i =0; i<answer.length;i++){
        if(answer[i] == "w"){
            a++
        }else if(answer[i] == "s"){
            a--
        }else if(answer[i] == "d"){
            a = a + 10
        }else if(answer[i] == "a"){
            a = a - 10
        }
    }
    return a;
}