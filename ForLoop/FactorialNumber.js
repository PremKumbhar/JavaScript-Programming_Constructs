const prompt = require('prompt-sync')();
//taking user input as constant

const n = prompt("Enter the value of factorial n : ");
var temp =  1;
for (var i = 1; i <= n; i++) {
    var pat =  i ;
    temp = temp + "*" + pat;
}
console.log(temp);