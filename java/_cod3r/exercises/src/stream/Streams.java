package stream;

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;
import java.util.stream.Stream;

public class Streams {
  public static void main(String[] args) {
    Consumer<String> printString = System.out::print;
    Consumer<Integer> printInteger = System.out::println;

    Stream<String> friends = Stream.of("Ma", "Re", "Lu");
    friends.forEach(printString);
    System.out.println("\n");

    String[] friendsArray = { "Ma", "Re", "Lu" };

    Stream.of(friendsArray).forEach(printString);
    System.out.println("\n");

    Arrays.stream(friendsArray).forEach(printString);
    System.out.println("\n");

    Arrays.stream(friendsArray, 1, 3).forEach(printString);
    System.out.println("\n");

    List<String> friendsList = Arrays.asList("Ma", "Re", "Lu");

    friendsList.stream().forEach(printString);
    System.out.println("\n");

    friendsList.parallelStream().forEach(printString);

    // Stream.generate(() -> "a").forEach(printString);
    // Stream.iterate(0, n -> n + 1).forEach(printInteger);
  }
}
