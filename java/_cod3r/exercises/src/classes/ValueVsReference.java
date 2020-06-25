package classes;

public class ValueVsReference {

	public static void main(String[] args) {

		int a = 2;
		int b = a; // assignment by value (primitive type)

		a++;
		b--;

		System.out.println(a + " " + b);

		Date d1 = new Date(1, 6, 2022);
		Date d2 = d1; // assignment by reference (object)

		d1.day = 31;
		d2.month = 12;

		System.out.println(d1.getFormattedDate());
		System.out.println(d2.getFormattedDate());

		setDefaultValue(d1);

		System.out.println(d1.getFormattedDate());
		System.out.println(d2.getFormattedDate());

		int c = 5;
		changePrimitive(c);
		System.out.println(c); // maybe expected 6
	}

	static void setDefaultValue(Date d) {
		d.day = 1;
		d.month = 1;
		d.year = 1970;
	}

	static void changePrimitive(int c) {
		c++;
	}
}