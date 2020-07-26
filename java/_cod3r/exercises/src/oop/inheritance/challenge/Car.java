package oop.inheritance.challenge;

public class Car {

  public final int MAX_SPEED;
  int currentSpeed = 0;
  int power = 5;

  Car() {
    super();
    MAX_SPEED = 100;
  }

  Car(int maxSpeed) {
    MAX_SPEED = maxSpeed;
  }

  public void brake() {
    if (currentSpeed >= power) {
      currentSpeed -= power;
    } else {
      currentSpeed = 0;
    }
  }

  public void speedUp() {
    if (currentSpeed <= MAX_SPEED - power) {
      currentSpeed += power;
    } else {
      currentSpeed = MAX_SPEED;
    }
  }
}
