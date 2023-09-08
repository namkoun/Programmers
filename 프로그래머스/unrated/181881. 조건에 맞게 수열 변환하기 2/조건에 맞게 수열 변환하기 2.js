function solution(arr) {
    var answer = 0;
    var aaa = 0;
    
    while(true){
        let asdf = [...arr]
        console.log(arr)
        for(let i =0;i<arr.length;i++){
             if(arr[i] >= 50 && arr[i] % 2 == 0){
                arr[i] = arr[i] / 2
            }else if(arr[i] < 50 && arr[i] % 2 !==0){
                arr[i] = (arr[i] * 2) + 1
            }
        }
      if(asdf.toString() == arr.toString() ){
          break;
      }else{
          answer++
      }
    }
    return answer;
}