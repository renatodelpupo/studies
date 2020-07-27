package oop.inheritance.challenge;

public interface Sport {
  // implicit public abstract
  void turnOffNOS();
  void turnOnNOS();

  default String NOSBrand() {
    return "D2D";
  }
}
