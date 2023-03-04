// Algorithm 5: Check whether a number is prime or not

import java.util.Scanner;

public class Algorithm5 {
    public static void main(String[] args) {
        int n, i, flag = 1;
        i = 2;

        Scanner scan = new Scanner(System.in);
        System.out.print("Enter a number: ");
        n = scan.nextInt();

        while (i<=n/2) {
            if(n%i==0) {
                flag=0;
                break;
            }
            i++;
        }

        if(flag==0) {
            System.out.println(n + " is not prime");
        } else {
            System.out.println(n + " is prime");
        }
    }
}