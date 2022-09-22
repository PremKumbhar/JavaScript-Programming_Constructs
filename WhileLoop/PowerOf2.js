const prompt = require('prompt-sync')();

//taking user input as constant
const n = prompt("Enter the value of n : ");
console.log("User input n = "+n);

let count =1;
let power =1;
while(power<=256 && count<=n){
    console.log(power);
    power = power*2;
    count++;
}