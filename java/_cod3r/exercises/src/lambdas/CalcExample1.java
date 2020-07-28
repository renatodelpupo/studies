package lambdas;

public class CalcExample1 {
  public static void main(String[] args) {
    Operation calc = new Addition();
    System.out.println(calc.exec(2, 3));

    calc = new Multiplication();
    System.out.println(calc.exec(2, 3));
  }
}
