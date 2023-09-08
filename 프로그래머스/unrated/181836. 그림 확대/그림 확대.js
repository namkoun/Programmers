function solution(picture, k) {
    var answer = []

    for(let i =0;i<picture.length;i++){
        let aa = picture[i].split("");
        let aaaa = [];
     
        for(let w =0; w<aa.length;w++){
            for(let q = 0; q<k;q++){
                 aaaa.push(aa[w])
            }
        }
        for(let q=0;q<k;q++){
             answer.push(aaaa.join(""))
        }
    }
    return answer;
}