package fundamentals;

import java.util.Scanner;

public class CalcChallenge {

	public static void main(String[] args) {

		Scanner keyboard = new Scanner(System.in);

		System.out.print("Type an int number: ");
		int num1 = keyboard.nextInt();

		System.out.println("Type an operator (+ - * /): ");
		String operator = keyboard.next();

		System.out.print("Type an int number: ");
		int num2 = keyboard.nextInt();

		int result = 0;

		if (operator.equals("+") || operator.equals("-") || operator.equals("*") || operator.equals("/")) {

			if (operator.equals("+")) {
				result = num1 + num2;
			}

			if (operator.equals("-")) {
				result = num1 - num2;
			}

			if (operator.equals("*")) {
				result = num1 * num2;
			}

			if (operator.equals("/")) {
				result = num1 / num2;
			}

			System.out.println("Result: " + result);

		} else {
			System.out.println("Invalid operator.");
		}

		keyboard.close();
	}
}
