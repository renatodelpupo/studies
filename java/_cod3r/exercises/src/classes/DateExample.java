package classes;

public class DateExample {

	public static void main(String[] args) {

		Date d1 = new Date();
		d1.day = 22;
		d1.month = 11;
		d1.year = 1912;

		System.out.printf("%s/%s/%s", d1.day, d1.month, d1.year);

	}

}
