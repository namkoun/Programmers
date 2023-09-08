function solution(arr, k) {
    var answer = [];
    const set = new Set(arr);
    let array = [...set]
    for(let i =0;i<k;i++){
        if(array[i] == null){
             answer.push(-1)
        }else{
            answer.push(array[i])
        }
 
    }
    
    return answer;
}