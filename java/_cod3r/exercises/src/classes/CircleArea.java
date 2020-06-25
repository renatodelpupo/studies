package classes;

public class CircleArea {

	double radius;
	final static double PI = 3.1415;
	// final => don't change
	// static => belongs to class

	CircleArea(double initialRadius) {
		radius = initialRadius;
	}

	double area() {
		return PI * Math.pow(radius, 2);
	}

	static double area(double radius) {
		return PI * Math.pow(radius, 2);
	}
}
