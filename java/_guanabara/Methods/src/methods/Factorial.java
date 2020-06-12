package methods;

public class Factorial {

  private int num = 0;
  private int fact = 1;
  private String formula = "";

  public void setValue(int n) {
    num = n;
    int f = 1;
    String s = "";

    for (int c = n; c > 1; c--) {
      f *= c;
      s += c + " x ";
    }

    s += "1 = ";
    fact = f;
    formula = s;
  }

  public int getFactorial() {
    return fact;
  }

  public String getFormula() {
    return formula;
  }
}
