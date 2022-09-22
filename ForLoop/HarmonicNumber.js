const prompt = require('prompt-sync')();
//taking user input as constant

const n = prompt("Enter the value of n : ");
var temp =  "1/1";
for (var i = 2; i <= n; i++) {
    var pat = "1/" + i ;
    temp = temp + "+" + pat;
}
console.log(temp);