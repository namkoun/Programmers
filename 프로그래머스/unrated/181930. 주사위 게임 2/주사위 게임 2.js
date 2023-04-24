function solution(a, b, c) {
    var answer = 0;
    if(a == b && b == c){
        let aa = 0
        answer = a+ b + c
        for(let i =2; i<=3;i++){
            aa = a**i + b**i + c**i   
            answer = answer * aa
        }
    }else if(a == b || a == c || b ==c){
        answer = (a+b+c) * (a**2 + b**2 + c**2)
    }else{
        answer = a + b + c
    }
    return answer; 
}