function solution(arr, delete_list) {
    var answer = [];
    for(let i=0;i<delete_list.length;i++){
        arr = arr.filter((value,index,arr) =>{
            return value !== delete_list[i]
        })
    }
    return arr;
}