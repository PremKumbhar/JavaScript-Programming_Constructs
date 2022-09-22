const prompt = require('prompt-sync')();

//taking user input
const startRange = prompt("Enter the Start: ");
const endRange = prompt("Enter the End Range: ");

//printing the user input range
console.log("\nFinding prime numbers from range\n"+startRange+"-"+endRange+"\nPrime number in between Range are :\n");


//finding prime number from it
if(endRange>startRange) {
    if(startRange==1) {
        console.log("Not Prime");
    }
    else {
        for(let i=startRange;i<=endRange;i++) {
            for(let j=2;j<=i;j++) {
                if(j==i) {
                    console.log("Prime number: "+i);
                }
                if(i%j==0)
                    break;   
            }
        }
    }
}  