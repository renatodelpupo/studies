package classes;

public class Date {

	int day;
	int month;
	int year;

	// Implicit and default constructor
	Date() {
		day = 1;
		month = 1;
		year = 1970;
	}

	// Explicit constructor
	Date(int initialDay, int initialMonth, int initialYear) {
		day = initialDay;
		month = initialMonth;
		year = initialYear;
	}

	void Date() {
		// Warning: This method has a constructor name
	}

	String getFormattedDate() {
		return String.format("%d/%d/%d", day, month, year);
	}

}
