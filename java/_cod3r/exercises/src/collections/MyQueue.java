package collections;

import java.util.LinkedList;
import java.util.Queue;

public class MyQueue {

	public static void main(String[] args) {

		Queue<String> queue = new LinkedList<>();

		// Add and offer -> add elements to queue
		queue.add("Ana"); // return error when queue is full
		queue.offer("Bia"); // return false when queue is full
		queue.add("Carlos");
		queue.offer("Daniel");

		// Peek and element -> get next element (no remove)
		System.out.println(queue.peek()); // return null when queue is empty
		System.out.println(queue.peek());
		System.out.println(queue.element()); // return error when queue is empty
		System.out.println(queue.element());

		// Poll and remove -> get next element (and remove)
		System.out.print("\n");
		System.out.println(queue.poll());
		System.out.println(queue.remove());
		System.out.println(queue.poll());
		System.out.println(queue.poll());
		System.out.println(queue.poll()); // return null when queue is empty
		// System.out.println(queue.remove()); // return error when queue is empty

		// System.out.print("\n");
		// System.out.println(queue.size());
		// System.out.println(queue.isEmpty());
		// System.out.println(queue.contains("Bia"));
		// queue.clear();
	}
}
