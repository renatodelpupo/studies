package collections;

import java.util.HashSet;
import java.util.Set;

public class RandomCollection {

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static void main(String[] args) {

		HashSet collection = new HashSet(); // HashSet is a type of Set

		// Collections doesn't accept primitive types,
		// so they will be converted to classes
		collection.add(1.2); // double -> Double
		collection.add(true); // boolean -> Boolean
		collection.add("Test"); // String
		collection.add(1); // int -> Integer
		collection.add('x'); // String

		System.out.println("The size is " + collection.size());

		collection.add("Test"); // don't add duplicates
		collection.add('x'); // don't add duplicates
		System.out.println("The size is " + collection.size());

		System.out.println(collection.remove("test")); // return false because "test" doesn't exists
		System.out.println(collection.remove("Test")); // return true removing "Test"
		System.out.println(collection.remove('x')); // return true removing "x"

		System.out.print("\n");

		System.out.println(collection.contains('x')); // return false because "x" was removed previously
		System.out.println(collection.contains(1));
		System.out.println(collection.contains(true));

		System.out.print("\n");

		Set numbers = new HashSet(); // other way to declare
		numbers.add(1);
		numbers.add(2);
		numbers.add(3);

		System.out.println(numbers);
		System.out.println(collection);

		// collection.addAll(numbers); // Merge collections unorderly
		collection.retainAll(numbers); // Common values
		System.out.println(collection);

		collection.clear();
		System.out.println(collection);
	}
}
