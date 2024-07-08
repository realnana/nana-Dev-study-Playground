import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char c;
        double a,b;
        c = sc.next().charAt(0);
        a = sc.nextDouble();
        b = sc.nextDouble();
        System.out.println(c);
        System.out.printf("%.2f\n", a);
        System.out.printf("%.2f\n", b);
    }
}