package oop.composition.challenge;

public class Product {
	final String brand;
	final String name;
	final double price;

	Product(String brand, String name, double price) {
		this.brand = brand;
		this.name = name;
		this.price = price;
	}

	public String toString() {
		return name;
	}
}
