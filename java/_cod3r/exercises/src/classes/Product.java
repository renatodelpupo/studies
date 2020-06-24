package classes;

public class Product {

	double discount;
	String name;
	double price;

	double getSalePrice() {
		return price * (1 - discount);
	}

}
