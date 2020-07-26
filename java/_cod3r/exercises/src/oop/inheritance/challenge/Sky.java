package oop.inheritance.challenge;

public class Sky extends Car {

  Sky() {
    this(120);
  }

  Sky(int maxSpeed) {
    super(maxSpeed);
    power = 20;
  }
}
