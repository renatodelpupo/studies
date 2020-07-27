package oop.inheritance.challenge;

public class Sky extends Car {

  public Sky() {
    this(120);
  }

  public Sky(int maxSpeed) {
    super(maxSpeed);
    setPower(20);
  }
}
