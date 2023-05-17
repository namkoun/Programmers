function solution(str1, str2) {
    var answer1 = str1.split("");
    var answer2 = str2.split("");
    var answer3 = "";
    for(let i=0;i<answer1.length;i++){
        answer3 += answer1[i]+answer2[i]
    }
    
    return answer3;
}