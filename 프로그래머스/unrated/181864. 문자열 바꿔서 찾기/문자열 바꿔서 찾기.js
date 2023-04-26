function solution(myString, pat) {
    myString = myString.replaceAll("A","C")
    myString = myString.replaceAll("B","A")
    myString = myString.replaceAll("C","B")
    console.log(myString)
    if(myString.includes(pat)){
        return 1
    }else{
        return 0
    }
}