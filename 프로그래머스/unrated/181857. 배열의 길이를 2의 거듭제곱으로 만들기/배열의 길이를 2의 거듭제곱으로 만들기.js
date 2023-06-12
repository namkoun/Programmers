function solution(arr) {
    var answer = 0;
    let a = arr.length
    let b = 0
    while(true){
        let ss = Math.pow(2, b);
        if(ss >= a){
            answer = ss
            break;
        }
        b++
    }
    if(a == answer){
        return arr
    }else{
        for(let i = 0;i<answer -a;i++){
            arr.push(0)
        }
    }
    return arr;
    
}