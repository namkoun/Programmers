function solution(myString, pat) {
    var answer = 0;
    let aaa=0
    for(let i =0;i<myString.length;i++){
        let aaaa = myString.indexOf(pat,aaa)
        if(aaaa !== -1){
            i = aaaa +1
            aaa = aaaa+1
            answer++
        }
       
    }
    return answer;
}