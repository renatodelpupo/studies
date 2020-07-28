package lambdas;

@FunctionalInterface
public interface Operation {
  // Only one abstract method for functional interface
  double exec(double a, double b);

  // Default method available
  default String stringDefault() {
    return "Default string";
  }

  // Static method available
  static String stringStatic() {
    return "Static string";
  }
}
