// Algorithm 2: Find the largest number among three numbers
import java.util.Scanner;

// step 1: start
class Algorithm2 {
    public static void main(String[] args) {
        // step 2: declare the variables
        int number1, number2, number3;
        // step 3: read variable values
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter first number: ");
        number1 = scan.nextInt();
        System.out.print("Enter second number: ");
        number2 = scan.nextInt();
        System.out.print("Enter third number: ");
        number3 = scan.nextInt();
        // step 4-a: chekc if number1 > number2
        if(number1 > number2) {
            // step 4-b: check if number1 > number3 (if YES, conclude that number 1 is the largest. Else, conclude that number3 is the largest)
            if(number1 > number3) {
                System.out.println(number1 + " is the largest of " + number1 + ", " + number2 + ", and " + number3);
            } else {
                System.out.println(number3 + " is the largest of " + number1 + ", " + number2 + ", and " + number3);
            }
            // step 4-c: check if number2 > number3 (if YES, number2 is the largest. Else, number 3 is the largest.)
        } else if(number2 > number3) {
            System.out.println(number2 + " is the largest of " + number1 + ", " + number2 + ", and " + number3);
        } else {
            System.out.println(number3 + " is the largest of " + number1 + ", " + number2 + ", and " + number3);
        }
    }
}