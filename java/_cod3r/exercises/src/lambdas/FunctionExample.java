package lambdas;

import java.util.function.Function;

public class FunctionExample {
  public static void main(String[] args) {

    Function<Integer, String> evenOrOdd = number -> number % 2 == 0 ? "even" : "odd";

    Function<String, String> thisNumberIs = value -> "This number is " + value;

    Function<String, String> exclamation = value -> value + "!";

    Function<String, String> question = value -> value + "?";

    String result =
        evenOrOdd
        .andThen(thisNumberIs)
        .andThen(exclamation)
        .andThen(question)
        .apply(32);

    System.out.println(result);
  }
}
