function solution(my_string) {
    var answer = my_string.split(" ");
    return answer.filter(f => f.length > 0);
}