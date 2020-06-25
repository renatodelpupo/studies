package classes;

public class NullValue {

	public static void main(String[] args) {

		String s1 = "";
		System.out.println(s1.concat("!!!!"));

		// Unresolved compilation problem: The local variable s2 may not have been initialized
		// String s2;
		// System.out.println(s2.concat("????"));

		// Run time error: NullPointerException
		String s3 = null;
		System.out.println(s3.concat("????"));

	}

}
