package lambdas;

import java.util.Arrays;
import java.util.List;
import java.util.function.Supplier;

public class SupplierExample {
  public static void main(String[] args) {
    Supplier<List<String>> aList = () -> Arrays.asList("Ma", "Re", "Lu");
    System.out.println(aList.get());
  }
}
