package arrays;

public class ForEach {

	public static void main(String[] args) {

		double[] grades = { 9.9, 8.7, 7.2, 9.4 };

		for (int i = 0; i < grades.length; i++) {
			System.out.print(grades[i] + " ");
		}

		System.out.println();

		for (double grade : grades) {
			System.out.print(grade + " ");
		}
	}
}