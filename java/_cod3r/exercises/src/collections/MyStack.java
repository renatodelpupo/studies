package collections;

import java.util.ArrayDeque;
import java.util.Deque;

public class MyStack {

	public static void main(String[] args) {

		Deque<String> books = new ArrayDeque<>();

		// Add and push -> add elements to stack
		books.add("The Posthumous Memoirs of Brás Cubas");
		books.push("Moby Dick");
		books.push("A Series of Unfortunate Events");

		// Peek and element -> get next element (no remove)
		System.out.println(books.peek());
		System.out.println(books.element());

		System.out.print("\n");
		for (String book : books) {
			System.out.println(book);
		}

		// Pop, poll and remove -> get next element (and remove)
		System.out.print("\n");
		System.out.println(books.pop());
		System.out.println(books.poll());
		System.out.println(books.poll());
		System.out.println(books.poll()); // return null when empty
		// System.out.println(books.pop()); // return NoSuchElementException when empty
		// System.out.println(books.remove()); // return NoSuchElementException when empty

		// System.out.print("\n");
		// System.out.println(books.size());
		// System.out.println(books.isEmpty());
		// System.out.println(books.contains("A Series of Unfortunate Events"));
		// books.clear();

	}
}
