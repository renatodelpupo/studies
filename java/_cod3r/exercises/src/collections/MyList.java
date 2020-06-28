package collections;

import java.util.ArrayList;
import java.util.List;

public class MyList {

	public static void main(String[] args) {
		List<User> list = new ArrayList<>();

		User u1 = new User("Ana");
		list.add(u1);

		list.add(new User("Carlos"));
		list.add(new User("Lia"));
		list.add(new User("Bia"));
		list.add(new User("Manuela"));
		list.add(new User("Manuela"));

		System.out.println(list.get(0)); // index access

		System.out.print("\n");
		System.out.println("Removing: " + list.remove(1));
		System.out.println(list.remove(new User("Manuela"))); // removing
		System.out.println(list.remove(new User("Manuela"))); // removing the second
		System.out.println(list.remove(new User("Manuela"))); // nothing to remove

		System.out.print("\n");
		System.out.println("Contains? " + list.contains(new User("Lia")));
		System.out.println("Contains? " + list.contains(u1));

		System.out.print("\n");
		for (User u : list) {
			System.out.println(u.name);
		}
	}
}
