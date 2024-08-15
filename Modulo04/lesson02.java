package Modulo04;

import java.util.Scanner;

public class lesson02 {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        //Exercise 01: Celsius to fahrenheit
//        System.out.println("Type the temperature in Celsius: ");
//        float celsius = sc.nextFloat();
//
//        float fahrenheit = (celsius * 9/5) + 32;
//        System.out.printf("The temperature in fahrenheit is "+ fahrenheit);

        //Exercise 02: Even or odd
//        System.out.println("Enter a number: ");
//        int number = sc.nextInt();
//
//        if(number % 2 == 0){
//            System.out.println("It's a even number");
//        }
//        else{
//            System.out.println("It's a odd number");
//        }

        //Days
//        System.out.println("Enter a number: ");
//        int day = sc.nextInt();
//
//        switch (day){
//            case 1:
//                System.out.println("Sunday");
//                break;
//            case 2:
//                System.out.println("Monday");
//                break;
//            case 3:
//                System.out.println("Tuesday");
//                break;
//            case 4:
//                System.out.println("Wednesday");
//                break;
//            case 5:
//                System.out.println("Thursday");
//                break;
//            case 6:
//                System.out.println("Friday");
//                break;
//            case 7:
//                System.out.println("Saturday");
//                break;
//            default:
//                System.out.println("Invalid day");
//                break;
//        }

        //Exercise 03: Verify if it's a leap year
//        System.out.println("Enter a year: ");
//        int year = sc.nextInt();
//
//        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
//            System.out.println(year+" is a leap year");
//        }
//        else{
//            System.out.println(year+" is not a leap year");
//        }

        //Exercise 04: Simple calculator

        System.out.println("Enter a number: ");
        float num1 = sc.nextFloat();

        System.out.println("Enter another number: ");
        float num2 = sc.nextFloat();

        System.out.println("Enter a operator (*, / , +, -): ");
        char operator = sc.next().charAt(0);

        switch (operator){
            case '*':
                System.out.println(num1 + num2);
                break;
            case '/':
                System.out.println(num1 / num2);
                break;
            case '+':
                System.out.println(num1 + num2);
                break;
            case '-':
                System.out.println(num1 - num2);
                break;
        }
    }
}
