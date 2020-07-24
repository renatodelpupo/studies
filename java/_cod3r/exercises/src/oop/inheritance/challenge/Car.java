package oop.inheritance.challenge;

public class Car {

  int currentSpeed = 0;
  int power = 5;

  public void brake() {
    if (currentSpeed >= power) currentSpeed -= power;
    if (currentSpeed < power && currentSpeed != 0) currentSpeed = 0;
  }

  public void speedUp() {
    currentSpeed += power;
  }
}
