function solution(nums) {
    var answer = 0;
    let maxNums = nums.length / 2;
    const set = new Set(nums);
    
    if(set.size >= maxNums){
        return maxNums
    }
    console.log(set.size)
    
    return set.size;
}