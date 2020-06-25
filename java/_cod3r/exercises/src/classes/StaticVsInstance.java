package classes;

public class StaticVsInstance {

	int a = 3;
	static int b = 4;

	public static void main(String[] args) {

		// System.out.println(a); // Cannot make a static reference to the non-static field a

		StaticVsInstance i = new StaticVsInstance();
		System.out.println(i.a);

		System.out.println(b);
	}
}
