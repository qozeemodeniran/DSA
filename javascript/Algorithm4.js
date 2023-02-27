const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the value of the number of which factorial you want to find: ', (num) => {
    const number = parseInt(num);
    let i, factorial = 1;

    for (i=1; i<=number; i++) {
        factorial *= i;
    }

    console.log(`The factorial of ${number} is ${factorial}`);
    rl.close();
})