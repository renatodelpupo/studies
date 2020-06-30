package oop.composition;

public class CarEngine {

	final Car car;
	boolean running = false;
	double injection = 1;

	CarEngine(Car car) {
		this.car = car;
	}

	int clock() {
		if (!running) {
			return 0;
		} else {
			return (int) Math.round(injection * 3000);
		}
	}
}
