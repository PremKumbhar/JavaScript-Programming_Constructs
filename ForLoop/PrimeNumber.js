const prompt = require('prompt-sync')();
//taking user input as constant

const n = prompt("Enter the number : ");
var flag = 0;
for (var i = 2; i < n; i++) {
    if (n % i == 0) {
        console.log(n + " is not a prime number");
        flag++;
        break;
    }
    // else {
    //     console.log(n +"is prime number");
    // }
}
if (flag == 0) {
    console.log(n + " is a prime number")
}