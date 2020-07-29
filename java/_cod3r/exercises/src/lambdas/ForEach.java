package lambdas;

import java.util.Arrays;
import java.util.List;

public class ForEach {
  public static void main(String[] args) {
    List<String> friends = Arrays.asList("Ma", "Re", "Lu");

    System.out.println("Traditional way");
    for (String name : friends) {
      System.out.println(name + "!");
    }

    System.out.print("\n");
    System.out.println("Lambda #01");
    friends.forEach(name -> System.out.println(name + "!"));

    System.out.print("\n");
    System.out.println("Method Reference #01");
    friends.forEach(System.out::println);

    System.out.print("\n");
    System.out.println("Lambda #02");
    friends.forEach(name -> myPrint(name));

    System.out.print("\n");
    System.out.println("Method Reference #02");
    friends.forEach(ForEach::myPrint);
  }

  static void myPrint(String name) {
    System.out.println("Hi! My name is " + name + ".");
  }
}
