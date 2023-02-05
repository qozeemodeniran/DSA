// Algorithm to add two numbers entered by a user
// neccesary to get user input in node.js environment
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// step 1: begin
// step 2: read the values of number1, number2
rl.question('Enter first number: ', (number1) => {
    rl.question('Enter second number: ', (number2) => {
        number1 = parseInt(number1);
        number2 = parseInt(number2);

        // step 3: add number1 and number2, then assign the result to sum
        let sum = number1 + number2;

        // step 4: show sum
        console.log(`The sum of ${number1}, and ${number2} is ${sum}`);

        rl.close();
    });
});
// step 5: stop