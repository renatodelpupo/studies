package classes;

public class Date {

	int day; // default 0
	int month; // default 0
	int year; // default 0

	// Implicit and default constructor
	Date() {
		// day = 1;
		// month = 1;
		// year = 1970;

		this(1, 1, 1970);
		// this() to call another constructor
	}

	// Explicit constructor
	Date(int day, int month, int year) {
		this.day = day;
		this.month = month;
		this.year = year;

		// this. to access instance variable
	}

	void Date() {
		// Warning: This method has a constructor name
	}

	String getFormattedDate() {
		final String format = "%d/%d/%d";
		return String.format(format, day, month, year);
	}

	void Initialization() {
		String notInitialized;
		// System.out.println(notInitialized); // Error: Local variable not initialized
	}

}
