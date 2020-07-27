package oop.inheritance.challenge;

public class Sky extends Car implements Sport {
  private Boolean NOS = false;

  public Sky() {
    this(120);
  }

  public Sky(int maxSpeed) {
    super(maxSpeed);
  }

  @Override
  public int getPower() {
    if (NOS) {
      return 30;
    } else {
      return 20;
    }
  }

  @Override
  public void turnOffNOS() {
    NOS = false;
  }

  @Override
  public void turnOnNOS() {
    NOS = true;
  }
}
