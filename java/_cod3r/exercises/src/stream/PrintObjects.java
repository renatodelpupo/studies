package stream;

import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Stream;

public class PrintObjects {
  public static void main(String[] args) {
    List<String> friends = Arrays.asList("Ma", "Re", "Lu");

    System.out.println("For each...");
    for (String name : friends) {
      System.out.println(name);
    }

    System.out.print("\n");
    System.out.println("Iterator");
    Iterator<String> iterator = friends.iterator();
    while (iterator.hasNext()) {
      System.out.println(iterator.next());
    }

    System.out.print("\n");
    System.out.println("Stream");
    Stream<String> stream = friends.stream();
    stream.forEach(System.out::println);
  }
}
