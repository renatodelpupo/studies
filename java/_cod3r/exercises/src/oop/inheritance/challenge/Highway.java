package oop.inheritance.challenge;

public class Highway {

  public static void main(String[] args) {
    Car sky = new Sky();
    Car volare = new Volare();

    System.out.println("Sky speed: " + sky.currentSpeed);
    System.out.println("Volare speed: " + volare.currentSpeed);
    System.out.print("\n");

    sky.speedUp();
    volare.speedUp();

    System.out.println("Sky speed: " + sky.currentSpeed);
    System.out.println("Volare speed: " + volare.currentSpeed);
    System.out.print("\n");

    sky.brake();
    sky.brake();
    volare.brake();
    volare.brake();

    System.out.println("Sky speed: " + sky.currentSpeed);
    System.out.println("Volare speed: " + volare.currentSpeed);
    System.out.print("\n");
  }
}
