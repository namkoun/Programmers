function solution(arr) {
    var a = arr.length
    var answer = arr;
    
    for(let i = 0;i < a ; i++){
           if(answer[i].length < a){
               for(let j = answer[i].length;j < a ; j++){
                   answer[i].push(0)
               }
               
           } 
    }
    for(let i = a;i < answer[0].length ; i++){
        let a = []
        for(let j = 0;j <  answer[0].length; j++){
                   a.push(0)
               }
               answer.push(a)
    }
    
    
    return answer;
}