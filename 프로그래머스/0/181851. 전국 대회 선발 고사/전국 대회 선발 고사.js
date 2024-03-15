function solution(rank, attendance) {

    var answer = [];
    for(let i=0;i<rank.length;i++){
        if(attendance[i]){
            answer.push(rank[i] *1)
        }
    }
    answer.sort((a,b) =>
        a - b
    );
    let a = rank.indexOf(answer[0],0)
    let b = rank.indexOf(answer[1],0)
    let c = rank.indexOf(answer[2],0)

    return (a*10000)+(b*100)+(c);
}