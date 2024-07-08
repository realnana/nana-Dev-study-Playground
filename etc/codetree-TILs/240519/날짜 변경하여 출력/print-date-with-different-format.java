import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        String[] strArr = str.split("\\.");
        System.out.println(strArr[1]+"-"+strArr[2]+"-"+strArr[0]);
    }
}