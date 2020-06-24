package classes;

public class Product {

	double discount;
	String name;
	double price;

	// Implicit and default constructor
	Product() {}

	// Explicit constructor
	Product(double initialDiscount, String initialName, double initialPrice) {
		discount = initialDiscount;
		name = initialName;
		price = initialPrice;
	}

	double getSalePrice() {
		return price * (1 - discount);
	}

}
