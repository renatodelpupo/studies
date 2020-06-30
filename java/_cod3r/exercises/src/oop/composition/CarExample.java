package oop.composition;

public class CarExample {

	public static void main(String[] args) {

		Car c1 = new Car();
		System.out.println(c1.isRunning());

		c1.turnOn();
		System.out.println(c1.isRunning());

		System.out.println(c1.engine.clock());

		c1.speedUp();
		c1.speedUp();
		c1.speedUp();
		c1.speedUp();

		System.out.println(c1.engine.clock());

		c1.brake();
		c1.brake();
		c1.brake();
		c1.brake();
		c1.brake();
		c1.brake();
		c1.brake();
		c1.brake();

		// closure pending
		// c1.engine.injection = -30;

		System.out.println(c1.engine.clock());

		// bidirectional interface
		System.out.println(c1.engine.car.engine.car.engine.clock());
	}
}
