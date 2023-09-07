function solution(arr, flag) {
    var answer = [];
    for(let i = 0; i < arr.length;i++){
        if(flag[i]){
            for(let q = 0; q<arr[i];q++){
              answer.push(arr[i])  
              answer.push(arr[i])
            }
        }else{
            for(let w = 0;w<arr[i];w++){
                answer.pop()
            }
        }
    }
    return answer;
}