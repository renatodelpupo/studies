package oop.composition.challenge;

public class PurchaseItem {
	final Product product;
	int quantity;

	PurchaseItem(Product product, int quantity) {
		this.product = product;
		this.quantity = quantity;
	}

	double getPriceTotal() {
		return this.product.price * this.quantity;
	}

	public String toString() {
		return quantity + "x " + product + ": " + this.getPriceTotal();
	}
}
