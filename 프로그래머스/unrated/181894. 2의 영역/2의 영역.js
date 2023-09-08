function solution(arr) {
    var answer = [];
    let aaa = arr.lastIndexOf(2)
    let aaa1 = arr.indexOf(2)
    if(aaa == -1){
        return [-1]
    }
    if(aaa == aaa1){
        return [2]
    } 
    for(let i=aaa1;i<aaa+1;i++){
        answer.push(arr[i])
    }
    
    return answer;
}