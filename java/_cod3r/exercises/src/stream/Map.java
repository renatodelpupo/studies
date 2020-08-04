package stream;

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.UnaryOperator;

public class Map {
  public static void main(String[] args) {
    Consumer<String> print = System.out::println;

    List<String> brands = Arrays.asList("BMW", "Audi", "Honda");
    brands.stream().map(m -> m.toUpperCase()).forEach(print);
    System.out.print("\n");

    // UnaryOperator<String> capitalize = n -> n.toUpperCase();
    UnaryOperator<String> firstCharacter = n -> n.charAt(0) + "";
    // UnaryOperator<String> exclamation = n -> n + "! ";

    System.out.println("Composition:");
    brands.stream().map(Utils.capitalize).map(firstCharacter).map(Utils::exclamation).forEach(print);
  }
}
