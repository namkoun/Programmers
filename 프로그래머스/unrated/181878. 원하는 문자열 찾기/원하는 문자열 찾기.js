function solution(myString, pat) {
    var answer = myString.toUpperCase().indexOf(pat.toUpperCase())
    if(answer == -1){
        return 0;
    }else{
        return 1;
    }
}