package Modulo04;

import java.util.Scanner;

public class lesson01 {
    public static void main(String[] args) {
//        byte byteVar = 127;
//        short shortVar = 32000;
//        int intVar = 21000000;
//        long longVar = 900000000;
//        float floatVar = 3.14F;
//        double doubleVar = 3.14159265;
//        char charVar = 'R';
//        boolean booleanVar = true;
//
//        System.out.println("Byte: " + byteVar);
//        System.out.println("Short: " + shortVar);
//        System.out.println("Int: " +intVar);
//        System.out.println("Long: " +longVar);
//        System.out.println("Float: " + floatVar);
//        System.out.println("Double: " + doubleVar);
//        System.out.println("Char: " + charVar);
//        System.out.println("Boolean: " + booleanVar);
//        System.out.printf("%.2f\n", floatVar);
//
//        String name = "Raissa";
//        System.out.print(name);
//
//        int a;
//        int b;
//        int c;
//        double area;
//
//        a = 5;
//        b = 7;
//        c = 3;
//
//        area = (double) (a+b)/2 * c;
//        System.out.println(area);

        Scanner sc = new Scanner(System.in);

        String name = sc.next();
        System.out.println("Your name is: " + name);

        int age = sc.nextInt();
        System.out.println("You are "+ age +" years old");
    }
}
