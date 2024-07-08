public class Main {
    public static void main(String[] args) {
        int a = 5, b = 6, c = 7;
        int temp1, temp2, temp3;

        temp1 = a;
        temp2 = b;
        temp3 = c;
        a = temp3;
        b = temp1;
        c = temp2;

        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
    }
}