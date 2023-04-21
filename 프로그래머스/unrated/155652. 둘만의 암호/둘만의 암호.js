function solution(s, skip, index) {
    var answer = new Array(26).fill().map((_, i) => String.fromCharCode(i + 97));
    for (let i = 97; i <= 122; i++) {
        answer.push(String.fromCharCode(i));
    }
    for (let i = 97; i <= 122; i++) {
        answer.push(String.fromCharCode(i));
    }
    let skip1 = skip.split("")
    let s1 = s.split("")
    let q = []
    answer = answer.filter(item => !skip1.includes(item));
    for(let i =0;i<s1.length;i++){
        let d = answer.indexOf(s1[i]);
       q.push(answer[d + index])  
    }
    return q.join("");
   
}