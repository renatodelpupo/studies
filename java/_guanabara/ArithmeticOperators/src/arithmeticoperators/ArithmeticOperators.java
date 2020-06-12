package arithmeticoperators;

public class ArithmeticOperators {

  public static void main(String[] args) {

    // Average
    int n1 = 2;
    int n2 = 4;
    int average = (n1 + n2) / 2;

    System.out.println("The average between " + n1 + " and " + n2 + " is " + average);
    System.out.print("\n");

    // Increment
    int n3 = 5;

    System.out.println("n3 is " + n3);
    System.out.println("Calculate: 5 + n3++");
    int n4 = 5 + n3++;

    System.out.println("Result: " + n4);
    System.out.println("n3 is now " + n3);
    System.out.print("\n");

    // Decrement
    System.out.println("n3 is " + n3);
    System.out.println("Calculate: 5 + n3--");
    int n5 = 5 + n3--;

    System.out.println("Result: " + n5);
    System.out.println("n3 is now " + n3);
    System.out.print("\n");

    // Assignment
    System.out.println("n3 is " + n3);
    System.out.println("n3 += 2 = " + (n3 += 2));
    System.out.print("\n");

  }

}
