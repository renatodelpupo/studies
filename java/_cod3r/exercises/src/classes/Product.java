package classes;

public class Product {

	static double discount = 0.25;
	String name;
	double price;

	// Implicit and default constructor
	Product() {}

	// Explicit constructor
	Product(String initialName, double initialPrice) {
		name = initialName;
		price = initialPrice;
	}

	double getSalePrice() {
		return price * (1 - discount);
	}

}
