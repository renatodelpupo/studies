package fundamentals;

import java.util.Scanner;

public class Console {

	public static void main(String[] args) {

		Scanner keyboard = new Scanner(System.in);

		System.out.print("Username: ");
		String username = keyboard.nextLine();

		System.out.print("PIN: ");
		int pin = keyboard.nextInt();

		System.out.printf("Logging %s with PIN %d", username, pin);

		keyboard.close();
	}

}
