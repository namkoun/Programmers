function solution(arr) {
    return arr.reduce((acc,cur) =>{
        const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
        return  acc * cur / gcd(acc, cur);
    })
}