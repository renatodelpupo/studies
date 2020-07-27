package oop.inheritance.challenge;

public class Volare extends Car {

  public Volare() {
    this(90);
  }

  public Volare(int maxSpeed) {
    super(maxSpeed);
    setPower(10);
  }

  @Override
  public void speedUp() {
    if (getCurrentSpeed() <= (MAX_SPEED - getPower())) {
      setCurrentSpeed(getCurrentSpeed() + getPower());
      System.out.println("Vrummmm");
    } else {
      setCurrentSpeed(MAX_SPEED);
    }
  }
}
