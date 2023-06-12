function solution(my_string, m, c) {
    var answer = my_string.split("");
    let asdfa = ""
    for(let i=c-1; i<answer.length; i+=m){
        asdfa += answer[i]
    }
    return asdfa;
}