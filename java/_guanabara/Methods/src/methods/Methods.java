package methods;

public class Methods {

  static void printText(String text) {
    System.out.print(text);
  }

  public static void main(String[] args) {

    int a = 2, b = 4;
    System.out.format("%d + %d = %d \n", a, b, Calcs.sum(a, b));
    printText("\n");

    System.out.format("Counting %d to %d: ", a, b);
    System.out.println(Calcs.counter(a, b));
    printText("\n");

    Factorial f = new Factorial();
    f.setValue(5);
    System.out.print(f.getFormula());
    System.out.println(f.getFactorial());
    printText("\n");
  }
}
