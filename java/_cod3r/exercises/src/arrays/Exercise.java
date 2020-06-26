package arrays;

import java.util.Arrays;

public class Exercise {

	public static void main(String[] args) {

		double[] studentAGrades = new double[4];
		System.out.println(Arrays.toString(studentAGrades));

		studentAGrades[0] = 7.9;
		studentAGrades[1] = 8;
		studentAGrades[2] = 6.7;
		studentAGrades[3] = 9.7;

		System.out.println(Arrays.toString(studentAGrades));

		double studentATotal = 0;
		for (int i = 0; i < studentAGrades.length; i++) {
			studentATotal += studentAGrades[i];
		}

		System.out.println(studentATotal / studentAGrades.length);

		final double variable = 5.9;
		double[] studentBGrades = { 6.9, 8.9, variable, 10 };

		double studentBTotal = 0;
		for (int i = 0; i < studentBGrades.length; i++) {
			studentBTotal += studentBGrades[i];
		}

		System.out.println(studentBTotal / studentBGrades.length);
	}
}
