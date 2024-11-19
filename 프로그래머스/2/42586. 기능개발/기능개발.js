function solution(progresses, speeds) {
    var answer = [];
    for(let i = 0; i < progresses.length; i++){
        answer.push(Math.ceil((100 - progresses[i]) / speeds[i]))
    }
 
    let compare = answer[0];
    let count = 0;           
    let result = [];         

    for (let i = 0; i < answer.length; i++) {
        if (compare >= answer[i]) {
            count++;
        } else {
            result.push(count);   
            count = 1;          
            compare = answer[i]; 
        }
    }
    result.push(count); 

    return result;
}