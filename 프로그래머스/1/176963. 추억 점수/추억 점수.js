function solution(name, yearning, photo) {
    var answer = [];
    
    for(let a = 0;a<photo.length; a++){
        let ins = name.filter(x => photo[a].includes(x))
        let number = 0
        for(let b = 0; b<name.length; b++){
            for(let c = 0; c<ins.length; c++){
                if(name[b] === ins[c]){
                    number += yearning[b]
                }
            }
        }        
        answer.push(number)
    }
  
    return answer;
}