const prompt = require('prompt-sync')();
/* taking user input of 3 numbers*/
const a = prompt("Enter 1st no.= ");
const b = prompt("Enter 2nd no.= ");
const c = prompt("Enter 3rd no.= ");

//performing operation
var op1 = (a + (b * c));
var op2 = ((a % b) + c);
var op3 = (c + (a / b));
var op4 = ((a * b) + c);
//printing the result from it
console.log("\ni) a+b*c = " + op1);
console.log("ii) a%b+c = " + op2);
console.log("iii) c+a/b = " + op3);
console.log("iv) a*b+c = " + op4);
//comparing for max and minimum
if (op1 > op2) {
    if (op1 > op3) {
        if (op1 > op4) {
            console.log("\nMaximum value = " + op1);
        } else {
            console.log("\nMaximum value = " + op4);
        }
    } else if (op3 > op4) {
        console.log("Maixmum value = " + op3);
    } else {
        console.log("Maixmum value = " + op4);
    }
} else if (op2 > op3) {
    if (op2 > op4) {
        console.log("Maixmum value = " + op2);
    } else {
        console.log("Maixmum value = " + op4);
    }
} else if (op3 > op4) {
    console.log("Maixmum value = " + op3);
} else {
    console.log("Maixmum value = " + op4);
}

console.log("Minimum value = " + Math.min(op1, op2, op3, op4));