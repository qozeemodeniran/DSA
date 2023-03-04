// Algorithm 5: Check whether a number is prime or not

const readline = require("readline");

let n, i, flag = 1;
i=2;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function(input) {
    n = parseInt(input);

    while (i<=n/2) {
        if(n%2==0) {
            flag=0;
            break;
        }
        i++;
    }

    if(flag==0) {
        console.log(n + " is not prime");
    } else {
        console.log(n + " is prime");
    }

    rl.close();
});