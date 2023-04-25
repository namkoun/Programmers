function solution(my_string, is_prefix) {
    var answer = my_string.indexOf(is_prefix);
    if(answer == 0){
        return 1    
    }else{
        return 0
    }
}