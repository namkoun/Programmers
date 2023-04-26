function solution(str_list, ex) {
    var answer = [...str_list]
    for(let i =0; i<str_list.length;i++){
        if(str_list[i].includes(ex)){
            delete answer[i]
        }
    }
    return answer.join("");
}