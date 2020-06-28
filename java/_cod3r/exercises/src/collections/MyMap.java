package collections;

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

public class MyMap {

	public static void main(String[] args) {

		Map<Integer, String> users = new HashMap<>();

		// Put -> Add or replace element
		users.put(1, "Ana");
		users.put(1, "Bia");
		users.put(3, "Carlos");
		users.put(4, "Daniel");

		System.out.println(users.size());
		System.out.println(users.isEmpty());

		System.out.print("\n");
		System.out.println(users.keySet());
		System.out.println(users.values());
		System.out.println(users.entrySet());

		System.out.print("\n");
		System.out.println(users.containsKey(1));
		System.out.println(users.containsValue("Ana"));

		System.out.print("\n");
		System.out.println(users.get(4));
		System.out.println(users.remove(1));
		System.out.println(users.remove(4, "Gui"));

		System.out.print("\n");
		for (int key : users.keySet()) {
			System.out.println(key);
		}

		System.out.print("\n");
		for (String valor : users.values()) {
			System.out.println(valor);
		}

		System.out.print("\n");
		for (Entry<Integer, String> user : users.entrySet()) {
			System.out.println(user.getKey() + ") " + user.getValue());
		}
	}
}
