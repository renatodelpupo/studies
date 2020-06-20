package fundamentals;

public class CircleArea {

	public static void main(String[] args) {
		final double PI = 3.14159;
		double radius = 3.5;
		double area = PI * radius * radius;

		System.out.println(area);

		radius = 7;

		System.out.println(PI * radius * radius);
	}

}
