package oop.composition.challenge;

import java.util.ArrayList;
import java.util.List;

public class Purchase {
	final int id;
	final List<PurchaseItem> purchaseItems = new ArrayList<>();

	Purchase(int id) {
		this.id = id;
	}

	void addItemToCart(Product product, int quantity) {
		this.purchaseItems.add(new PurchaseItem(product, quantity));
	}

	void addItemToCart(String brand, String name, double price, int quantity) {
		Product product = new Product(brand, name, price);
		this.addItemToCart(product, quantity);
	}

	double getPriceTotal() {
		double price = 0;

		for (PurchaseItem purchaseItem : purchaseItems) {
			price += purchaseItem.getPriceTotal();
		}

		return price;
	}

	void showReceipt() {
		System.out.printf("> Receipt of purchase %d \n", this.id);
		for (PurchaseItem purchaseItem : purchaseItems) System.out.println(purchaseItem.toString());
		System.out.printf("> Total: %.2f \n", this.getPriceTotal());
	}
}
