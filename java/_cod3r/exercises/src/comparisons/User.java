package comparisons;

public class User {

	String name;
	String email;

	public boolean equals(Object obj) {

		// Check if object is an User instance
		if (obj instanceof User) {
			User other = (User) obj; // Cast object to User

			boolean equalName = other.name.equals(this.name); // Compare name
			boolean equalEmail = other.email.equals(this.email); // Compare email

			return equalName && equalEmail; // Check equality
		} else {
			return false;
		}
	}
}
