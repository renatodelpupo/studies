package oop.inheritance.challenge;

public class Sky extends Car {

  int power = 20;

  @Override
  public void brake() {
    if (currentSpeed >= power) currentSpeed -= power;
    if (currentSpeed < power && currentSpeed != 0) currentSpeed = 0;
  }

  @Override
  public void speedUp() {
    currentSpeed += power;
  }
}
