package oop.composition;

import java.util.ArrayList;

public class Shop {

	String customer;
	ArrayList<Product> items = new ArrayList<>();

	void addProduct(String name, int quantity, double price) {
		this.addProduct(new Product(name, quantity, price));
	}

	void addProduct(Product item) {
		this.items.add(item);
		item.shop = this;
	}

	double getTotalPrice() {
		double total = 0;

		for (Product item : items) {
			total += item.quantity * item.price;
		}

		return total;
	}
}
