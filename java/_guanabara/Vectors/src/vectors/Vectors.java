package vectors;

import java.util.Arrays;

public class Vectors {

  public static void main(String[] args) {
    int vector[] = {3, 2, 1, 5, 4};

    // for each
    for (int value: vector) {
      System.out.print(value + " ");
    }
    System.out.println("\n");

    // sort
    Arrays.sort(vector);
    for (int value: vector) {
      System.out.print(value + " ");
    }
    System.out.println("\n");

    // binary search
    int number = 2;
    System.out.print("The item " + number + " is in position " + Arrays.binarySearch(vector, number));
    System.out.println("\n");

    // fill
    int catsLives[] = new int[4]; // I have four cats
    Arrays.fill(catsLives, 7); // Each cat has seven lives
    for (int value: catsLives) {
      System.out.print(value + " ");
    }
    System.out.println("\n");

  }

}
