package lambdas;

public class CalcExample2 {
  public static void main(String[] args) {
    Operation calc = (x, y) -> { return x + y; };
    System.out.println(calc.exec(2, 3));

    calc = (x, y) -> x * y;
    System.out.println(calc.exec(2, 3));
  }
}
