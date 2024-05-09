import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double n;
        n = sc.nextDouble();
        n *= 30.48;
        System.out.printf("%.1f", n);
    }
}