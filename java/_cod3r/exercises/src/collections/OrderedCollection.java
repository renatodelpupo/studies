package collections;

import java.util.HashSet;
import java.util.Set;
import java.util.SortedSet;
import java.util.TreeSet;

public class OrderedCollection {

	public static void main(String[] args) {

		Set<String> studentList1 = new HashSet<>();
		studentList1.add("Ana");
		studentList1.add("Carlos");
		studentList1.add("Lucas");
		studentList1.add("Pedro");

		System.out.println("> Unordered:");
		for (String student : studentList1) {
			System.out.println(student);
		}

		SortedSet<String> studentList2 = new TreeSet<>();
		studentList2.add("Ana");
		studentList2.add("Carlos");
		studentList2.add("Lucas");
		studentList2.add("Pedro");

		System.out.print("\n");
		System.out.println("> Ordered:");
		for (String student : studentList2) {
			System.out.println(student);
		}

		Set<Integer> numbers = new HashSet<>();
		numbers.add(1);
		numbers.add(2);
		numbers.add(120);
		numbers.add(6);

		// numbers.get(1); // Invalid get by index

		System.out.print("\n");
		for (int n : numbers) {
			System.out.println(n);
		}
	}
}
