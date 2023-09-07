function solution(my_string, queries) {
    var answer = my_string
    for(let i = 0; i<queries.length;i++){
        answer = reverseArr(answer,queries[i][0],queries[i][1])
    }
    return answer;
}
function reverseArr(my_string, s, e) {
     let params = my_string
    .substring(s, e + 1)
    .split("")
    .reverse();
  let strArr = my_string.split("");
  strArr.splice(s, e - s + 1, ...params);
  return strArr.join("");
}