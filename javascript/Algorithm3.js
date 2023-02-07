// Algorithm 3: Find Roots of a Quadratic Equation ax2 + bx + c = 0
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter value of a: ', (a) => {
    rl.question('Enter value of b: ', (b) => {
        rl.question('Enter value of c: ', (c) => {
            a = parseFloat(a);
            b = parseFloat(b);
            c = parseFloat(c);
            let D = b * b - 4 * a * c;
            if (D >= 0) {
                let r1 = (-b + Math.sqrt(D)) / (2 * a);
                let r2 = (-b - Math.sqrt(D)) / (2 * a);
                console.log(`The roots are: ${r1} and ${r2}`);
            } else {
                let rp = -b / (2 * a);
                let ip = Math.sqrt(-D) / (2 * a);
                console.log(`The roots are: ${rp} + j${ip} and ${rp} - j${ip}`);
            }
            rl.close();
        });
    });
});
