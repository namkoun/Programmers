function solution(my_string) {
    let arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    var answer = Array(52).fill(0);
    for(let i =0; i<arr.length;i++){
        for(let k =0; k<my_string.length;k++){
            if(arr[i]==my_string[k]){
                answer[i]++
            }
        }
    }
    return answer;
}