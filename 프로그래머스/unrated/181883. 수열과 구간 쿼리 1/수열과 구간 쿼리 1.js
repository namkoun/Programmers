function solution(arr, queries) {
    let aa = [];
    for(let i =0; i<queries.length;i++){
        for(let k = queries[i][1] ; k>=queries[i][0];k--){
            aa.push(k)
        }
    }
    for(let q =0; q<aa.length;q++){
       arr[aa[q]] = arr[aa[q]] + 1
    }

    return arr;
}