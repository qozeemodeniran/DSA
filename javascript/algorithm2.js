// Algorithm 2: Find the largest number among three numbers
// neccesary to get user input in node.js environment
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// step 1: start
// step 2: read values of number1, number2, and number3.
rl.question("Enter three integer numbers separated by comma: ", (input) => {
    // step 3: declare the variables, and assign the values entered respectively
    let numbers = input.split(',');
    let number1 = parseInt(numbers[0]);
    let number2 = parseInt(numbers[1]);
    let number3 = parseInt(numbers[2]);

    // step 4: check if number1 > number2
    if(number1 > number2) {
        // step 4-a: check if number1 > number3
        if(number1 > number3) {
            // step 4-b if number1 is greater than number2 and number3, then conclude that number1 is the largest.
            console.log(`${number1} is the largest of ${number1}, ${number2}, and ${number3}`); 
        } else {
            // step 4-c: Else, conclude that number3 is the largest
            console.log(`${number3} is the largest of ${number1}, ${number2}, and ${number3}`);
        } 
    } else {
        // step 5: Else, check if number2 > number3
        if(number2 > number3) {
            // step 5-a: if true, conlcude that number2 is the largest
            console.log(`${number2} is the largest of ${number1}, ${number2}, and ${number3}`);
        } else {
            // step 5-c: Else, onclude that number3 is the largest
            console.log(`${number3} is the largest of ${number1}, ${number2}, and ${number3}`);
        }
    }
    rl.close()
});
// step 6: stop