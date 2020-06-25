package classes;

public class CircleAreaExample {

	public static void main(String[] args) {

		CircleArea a1 = new CircleArea(10);
		a1.radius = 10;

		System.out.println(a1.area());
		System.out.println(CircleArea.PI);
	}
}
