package stream;

import java.util.Arrays;
import java.util.List;
import java.util.function.UnaryOperator;

public class MapChallenge {
  public static void main(String[] args) {
    List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9);

    UnaryOperator<String> reverseString = str -> {
      StringBuilder sb = new StringBuilder(str);
      sb.reverse();

      return sb.toString();
    };

    numbers.stream()
      .map(Integer::toBinaryString)
      .map(reverseString)
      .map(str -> Integer.parseInt(str, 2))
      .forEach(System.out::println);
  }
}
