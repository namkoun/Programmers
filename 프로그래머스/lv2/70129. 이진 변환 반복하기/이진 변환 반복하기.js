function solution(s) {
    var answer = s;
    var answer1 = 0;
    var answer2 = 0;
      
     while(true){

         if(answer == "1"){
             break;
         }
         for(let i=0;i<answer.length;i++){
                if(answer[i] == "0"){

                  answer1++
                }
            }
        answer = answer.replace(/0/g,"").toString(2).length.toString(2);
         answer2++
     }


    return [answer2,answer1];
}