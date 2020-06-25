package classes.challenge;

public class Person {

	String name;
	double weight;

	Person(String name, double weight) {
		this.name = name;
		this.weight = weight;
	}

	void eat(Food food) {
		if (food != null) {
			this.weight += food.weight;
		}
	}

	String present() {
		return "Hi, I'm " + name + " and I weigh " + weight + " kilos.";
	}
}
