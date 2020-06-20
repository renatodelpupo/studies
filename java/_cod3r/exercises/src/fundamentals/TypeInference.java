package fundamentals;

public class TypeInference {

	public static void main(String[] args) {

		// Before:
		// double a = 4.1
		// a = 7.4

		// int b = 14
		// b = 21

		// After:
		var a = 4.1;
		a = 7.4;

		var b = 14;
		b = 21;

		// The type has been inferred, but cannot be changed.
		// b = "I'm an error";

		System.out.println(a + b);

	}

}
