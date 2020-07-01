package oop.composition;

public class Product {

	String name;
	double price;
	int quantity;
	Shop shop;

	Product(String name, int quantity, double price) {
		this.name = name;
		this.quantity = quantity;
		this.price = price;
	}
}
