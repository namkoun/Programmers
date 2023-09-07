function solution(a, b, c, d) {
    let arr = [a,b,c,d]
    const set = new Set([a,b,c,d]);
     var answer = [...set];
    if(answer.length == 1){
        let one = String(answer[0]) + answer[0] + answer[0] + answer[0] 
        return one*1
    }else if(answer.length == 4){
      return Math.min.apply(null, answer);
    } else if(answer.length == 3) {
        let multiple = 1;
        
        for (let i in answer) {
            let size = arr.filter(f => f == answer[i]).length;
            if (size == 1) multiple *= answer[i];
        }
        
        return multiple;
    }else if (answer.length == 2) {
        let twotwo = arr.filter(f => f == answer[0]).length % 2 == 0;
        if(twotwo){
           return (answer[0] + answer[1]) * Math.abs(answer[0] - answer[1])
        }else {
            let more = arr.filter(f => f == answer[0]).length == 3;
            let big = more ? answer[0] : answer[1];
            let small = more ? answer[1] : answer[0];
            
            return (10 * big + small)**2;
            
        }
        
    }

}