const prompt = require('prompt-sync')();
//taking user input as constant

const num = prompt("Enter a number as multiple of 10  : ");

if (num == 0) {
    console.log("Zero");
} else if (num == 1) {
    console.log("Unit");
} else if (num == 10) {
    console.log("Ten");
} else if (num == 100) {
    console.log("Hundred")
} else if (num == 1000) {
    console.log("Thousand");
} else {
    console.log("please enter number like 1,10,100,1000");
}