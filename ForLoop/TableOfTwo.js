const prompt = require('prompt-sync')();
//taking user input

const n = prompt("Enter the value of n : ");
//looping to get upto user input multiple table
for (var i = 1; i <= n; i++) {
    var table = 2 * i;
    console.log("2 * " + i + " = " + table);
}