function solution(num_list, n) {
    var answer = [];
    for(let i =0;i < n;i++){
       answer.push(num_list[i])
    
    }
    num_list.splice(0,n)
    return num_list.concat(answer);
}