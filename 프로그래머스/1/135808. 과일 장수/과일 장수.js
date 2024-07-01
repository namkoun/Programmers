function solution(k, m, score) {
    var answer = 0;
    score.sort(function(a, b)  {
        return b - a ;
    });
    
      let result = [];
  for (let i = 0; i < score.length; i += m) {
    result.push(score.slice(i, i + m));
  }
    
    let abc = 0
    for(let v=0; v<result.length;v++){
        if(result[v].length == m){
        abc += m * Math.min.apply(null, result[v]) * 1
            
        }
    }
    
    
     console.log(result)
    
    return abc;
}