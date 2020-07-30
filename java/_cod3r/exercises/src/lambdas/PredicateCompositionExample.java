package lambdas;

import java.util.function.Predicate;

public class PredicateCompositionExample {
  public static void main(String[] args) {
    Predicate<Integer> isOdd = num -> num % 2 != 0;
    Predicate<Integer> lengthThree = num -> num >= 100 && num <= 999;

    System.out.println(isOdd.and(lengthThree).negate().test(147));
    System.out.println(isOdd.or(lengthThree).test(147));
  }
}
