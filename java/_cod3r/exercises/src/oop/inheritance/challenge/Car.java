package oop.inheritance.challenge;

public class Car {

  public final int MAX_SPEED;
  public int currentSpeed = 0;
  protected int power = 5;

  protected Car() {
    super();
    MAX_SPEED = 100;
  }

  protected Car(int maxSpeed) {
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
