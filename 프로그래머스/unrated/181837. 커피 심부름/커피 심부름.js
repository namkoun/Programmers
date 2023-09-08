function solution(order) {
    var answer2 = order.length;
    var answer = order.toString();
    const pattern = /cafelatte/g;
    const matches = answer.match(pattern);
    const count = matches ? matches.length : 0;
    return (answer2-count)*4500 + count*5000;
}