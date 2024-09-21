package Modulo05;

import java.util.Scanner;

public class lesson03 {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        /*
        int[] vetor = new int[5];
        vetor[0] = 10;
        vetor[1] = 20;
        vetor[2] = 30;
        vetor[3] = 40;
        vetor[4] = 50;

        System.out.println("Elementos do array 'vetor': ");
        for (int j = 0; j < vetor.length; j++) {
            System.out.println("Elemento na posição " + j + ": " + vetor[j]);
        }


        // Reverta a array
        int start = 0;
        int end = vetor.length - 1;
        while (start < end) {
            int temp = vetor[start];
            vetor[start] = vetor[end];
            vetor[end] = temp;
            start++;
            end--;
        }
        System.out.println("Array 'vetor' invertido: ");
        for (int j = 0; j < vetor.length; j++) {
            System.out.println("Elemento na posição " + j + ": " + vetor[j]);
        }

        // Adicionane um elemento na array
        int[] newArray = new int[vetor.length + 1];
        for (int j = 0; j < vetor.length; j++) {
            newArray[j] = vetor[j];
        }
        newArray[vetor.length] = 1;

        // Remova um elemento da array
        int countRemocao = 0;
        for (int j = 0; j < vetor.length; j++) {
            if (vetor[j] != 10) {
                countRemocao++;
            }
        }
        int[] newArrayRemocao = new int[countRemocao];
        int index = 0;
        for (int j = 0; j < vetor.length; j++) {
            if (vetor[j] != 10) {
                newArrayRemocao[index] = vetor[j];
                index++;
            }
        }
        System.out.println("Array após remoção: ");
        for (int j = 0; j < newArrayRemocao.length; j++) {
            System.out.println("Elemento na posição " + j + ": " + newArrayRemocao[j]);
        }

        // Pesquisando elementos
        for (int j = 0; j < vetor.length; j++) {
            if (vetor[j] == 20) {
                System.out.println("Elemento 20 encontrado na posição: " + j);
            }
        }
        */

        // Matrizes (arrays bidimensionais)
        int[][] matrix = {
                {10, 20, 35},
                {30, 50, 60},
                {70, 80, 90}
        };

        // Rotação de matriz 90 graus
        int n = matrix.length;
        int[][] rotacionada = new int[n][n];
        for (int j = 0; j < n; j++) {
            for (int k = 0; k < n; k++) {
                rotacionada[k][n - 1 - j] = matrix[j][k];
            }
        }
        System.out.println("Matriz rotacionada 90 graus:");
        for (int j = 0; j < n; j++) {
            for (int k = 0; k < n; k++) {
                System.out.print(rotacionada[j][k] + " ");
            }
            System.out.println();
        }

        // Soma das diagonais da matriz
        int sumPrincipal = 0;
        int sumSecundaria = 0;
        for (int j = 0; j < matrix.length; j++) {
            for (int k = 0; k < matrix[j].length; k++) {
                if (j == k) {
                    sumPrincipal += matrix[j][k];
                }
                if ((j + k) == matrix.length - 1) {
                    sumSecundaria += matrix[j][k];
                }
            }
        }

        System.out.println("Soma principal: " + sumPrincipal);
        System.out.println("Soma secundária: " + sumSecundaria);

        sc.close();
    }
}
