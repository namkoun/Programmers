function solution(arr1, arr2) {
    var answer = arr1.length
    var answer1 = arr2.length
    if(answer < answer1){
        return -1    
    }else if(answer > answer1){
        return 1
    }else if(answer == answer1){
        let a = 0
        let b = 0
        for(let i =0; i<answer;i++){
            a += arr1[i]
            b += arr2[i]
        }
        if(a < b){
            return -1    
        }else if(a > b){
            return 1
        }else if(a == b){
            return 0
        }
    }
   
}