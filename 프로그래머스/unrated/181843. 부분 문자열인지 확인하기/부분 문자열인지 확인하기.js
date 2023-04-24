function solution(my_string, target) {
    var answer = my_string.indexOf(target);
    if(answer == -1){
        return 0
    }else{
        return 1
    }
}