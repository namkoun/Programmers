function solution(arr, queries) {
    let result = [];
    for(let i=0;i<queries.length;i++){
        let tt = true;
         let answer = [];
          for(let k = queries[i][0];k<=queries[i][1];k++){
                let std = queries[i][2];
              if(std < arr[k]){
                  answer.push(arr[k]);
                  tt = false
              }
        }
        if(tt){
            answer.push(-1);
        }
       result.push(Math.min.apply(null, answer)) 
    }
    return result;
}