// Algorithm 1: Add two numbers entered by the user

import java.util.Scanner;

class Algorithm1 {
    // step 1: start
    public static void main(String[] args) {
        // step 2: decalare variables
        int number1, number2, sum;
        // step 3: read variable values
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter first number: ");
        number1 = scan.nextInt();
        System.out.print("Enter second number: ");
        number2 = scan.nextInt();
        // step 4: do the addition, and assign result to 'sum'
        sum = number1 + number2;
        // show result
        System.out.println("The sum of " + number1 + " and " + number2 + " is " + sum);
    }
}