package classes.challenge;

public class Dinner {

	public static void main(String[] args) {

		Food c1 = new Food("Rice", 0.180);
		Food c2 = new Food("Beans", 0.300);

		Person p = new Person("John", 99.8);

		System.out.println(p.present());

		p.eat(c1);
		System.out.println(p.present());

		p.eat(c2);
		System.out.println(p.present());
	}
}
