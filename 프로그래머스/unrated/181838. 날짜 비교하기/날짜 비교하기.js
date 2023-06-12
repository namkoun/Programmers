function solution(date1, date2) {
    var date3 = new Date(date1.join('-'));
    var date4 = new Date(date2.join('-'));
    
    return date3 < date4 ? 1 : 0;
}