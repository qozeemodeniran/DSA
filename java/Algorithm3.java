// Algorithm 3: Find Roots of a Quadratic Equation ax2 + bx + c = 0
import java.util.Scanner;
class Algorithm3 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        double a,b,c,D,rp,ip,r1,r2;
        System.out.print("Enter the first coefficiet of the quadratic equation: ");
        a = scan.nextDouble();
        System.out.print("Enter the second coefficiet of the quadratic equation: ");
         b = scan.nextDouble();
        System.out.print("Enter the third coefficiet of the quadratic equation: ");
        c = scan.nextDouble();
        D = b*b-4*a*c;
        if(D>=0) {
            r1 = (-b+Math.sqrt(D))/(2*a);
            r2 = (-b-Math.sqrt(D))/(2*a);
            System.out.println("The roots of the qudratic queation are: " + r1 + " and " + r2);
        } else {
            rp = -b/(2*a);
            ip = Math.sqrt(-D)/(2*a);
            System.out.println("The roots of the quadratic equation are: " + rp + "+j(" + ip +") and " +rp + "-j(" + ip +")");
        }
    }
}