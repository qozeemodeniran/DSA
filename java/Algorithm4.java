// Algorithm 4: Find the factorial of a number

import java.util.Scanner;

class Algorithm4 {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        int number, i, factorial = 1;
        
        System.out.print("Enter the value of the number of which factorial you want to find: ");
        number = scan.nextInt();

        for (i=1; i<=number; i++) {
            factorial *=i;
        }
        System.out.println("The factorial of " + number + " is " + factorial);
    }
}
