package oop.inheritance.main;

import oop.inheritance.challenge.Car;
import oop.inheritance.challenge.Sky;
import oop.inheritance.challenge.Volare;

public class Highway {

  public static void main(String[] args) {
    Car sky = new Sky();
    Sky skyGt = new Sky(220);
    Car volare = new Volare();

    System.out.println("Sky speed: " + sky.getCurrentSpeed());
    System.out.println("Sky GT speed: " + skyGt.getCurrentSpeed());
    System.out.println("Sky GT NOS brand: " + skyGt.NOSBrand());
    System.out.println("Volare speed: " + volare.getCurrentSpeed());
    System.out.print("\n");

    skyGt.turnOnNOS();

    int speedUpCount = 5;
    System.out.println("Speeding up " + speedUpCount + " times.");
    System.out.print("\n");
    
    for (int x = 0; x < speedUpCount; x++) {
      sky.speedUp();
      skyGt.speedUp();
      volare.speedUp();
    }
    
    System.out.print("\n");
    System.out.println("Sky speed: " + sky.getCurrentSpeed());
    System.out.println("Sky GT speed: " + skyGt.getCurrentSpeed());
    System.out.println("Volare speed: " + volare.getCurrentSpeed());
    System.out.print("\n");
    
    int brakeCount = 5;
    System.out.println("Braking " + brakeCount + " times.");
    System.out.print("\n");

    for (int x = 0; x < brakeCount; x++) {
      sky.brake();
      skyGt.brake();
      volare.brake();
    }

    System.out.println("Sky speed: " + sky.getCurrentSpeed());
    System.out.println("Sky GT speed: " + skyGt.getCurrentSpeed());
    System.out.println("Volare speed: " + volare.getCurrentSpeed());
    System.out.print("\n");
  }
}
