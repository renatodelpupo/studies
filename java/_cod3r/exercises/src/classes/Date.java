package classes;

public class Date {

	int day;
	int month;
	int year;

	String getFormattedDate() {
		return String.format("%d/%d/%d", day, month, year);
	}

}
