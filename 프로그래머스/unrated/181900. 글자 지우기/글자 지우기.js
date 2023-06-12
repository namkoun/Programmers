function solution(my_string, indices) {
    var answer = my_string.split("");
    for(let i=0;i<indices.length;i++){
        answer[indices[i]] = ""
    }
    return answer.filter(i => i.length !== 0).join("");
}