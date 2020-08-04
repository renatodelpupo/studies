package stream;

import java.util.function.UnaryOperator;

public class Utils {
  private Utils() {}

  public final static UnaryOperator<String> capitalize = n -> n.toUpperCase();

  public final static UnaryOperator<String> firstCharacter = n -> n.charAt(0) + "";

  public final static String exclamation(String n) {
    return n + "! ";
  }
}
