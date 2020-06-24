package classes;

public class DateExample {

	public static void main(String[] args) {

		Date d1 = new Date(22, 11, 1912);
		Date d2 = new Date();

		System.out.println(d1.getFormattedDate());
		System.out.println(d2.getFormattedDate());

	}

}
