package methods;

public class Calcs {

  static String counter(int start, int end) {
    String string = "";

    for (int c = start; c <= end; c++) {
      string += c + " ";
    }

    return string;
  }

  static int sum(int a, int b) {
    return a + b;
  }
}
