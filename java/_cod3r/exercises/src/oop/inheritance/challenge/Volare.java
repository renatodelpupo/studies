package oop.inheritance.challenge;

public class Volare extends Car {

  public Volare() {
    this(90);
  }

  public Volare(int maxSpeed) {
    super(maxSpeed);
    power = 10;
  }

  @Override
  public void speedUp() {
    if (currentSpeed <= (MAX_SPEED - power)) {
      currentSpeed += power;
      System.out.println("Vrummmm");
    } else {
      currentSpeed = MAX_SPEED;
    }
  }
}
