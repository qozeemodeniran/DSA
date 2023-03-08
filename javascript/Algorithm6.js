// Algorithm 6: Find the Fibonacci series till the term less than 1000

let firstTerm = 0;
let secondTerm = 1;

console.log(firstTerm + " " + secondTerm);

while (secondTerm < 1000) {
  let temp = secondTerm;
  secondTerm = secondTerm + firstTerm;
  firstTerm = temp;
  if (secondTerm < 1000) {
    console.log(secondTerm);
  }
}
