const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let a = str.split("")
    let b = ""
    for(let i=0;i<a.length;i++){
        b += a[i] + "\n"
    }
    console.log(b)
});