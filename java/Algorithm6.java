// Algorithm 6: Find the Fibonacci series till the term less than 1000

public class Algorithm6 {
    public static void main(String[] args) {
        int first_term = 0, second_term = 1, temp;

        System.out.print(first_term + " " + second_term + " ");

        while (second_term < 1000) {
            temp = second_term;
            second_term = second_term + first_term;
            first_term = temp;
            if (second_term < 1000) {
                System.out.print(second_term + " ");
            }
        }
    }
}