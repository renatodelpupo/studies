package lambdas;

import java.util.function.BiFunction;
import java.util.function.BinaryOperator;
import java.util.function.Function;

public class BinaryOperatorExample {
  public static void main(String[] args) {
    BinaryOperator<Double> average = (n1, n2) -> (n1 + n2) / 2;
    System.out.println(average.apply(9.8, 5.7));

    Function<Double, String> approved = m -> m >= 7 ? "Approved" : "Fail";
    System.out.println(average.andThen(approved).apply(9.7, 5.1));

    BiFunction<Double, Double, String> approved2 = (n1, n2) -> {
      double score = (n1 + n2) / 2;
      return score >= 7 ? "Approved" : "Fail";
    };
    System.out.println(approved2.apply(9.7, 4.1));
  }
}
