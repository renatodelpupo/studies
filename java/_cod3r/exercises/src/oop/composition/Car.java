package oop.composition;

public class Car {

	final CarEngine engine;

	Car() {
		this.engine = new CarEngine(this);
	}

	void brake() {
		if (engine.injection > 0.5) {
			engine.injection -= 0.4;
		}
	}

	void speedUp() {
		if (engine.injection < 2.6) {
			engine.injection += 0.4;
		}
	}

	void turnOff() {
		engine.running = false;
	}

	void turnOn() {
		engine.running = true;
	}

	boolean isRunning() {
		return engine.running;
	}
}
