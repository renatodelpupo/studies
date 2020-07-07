package oop.composition.challenge;

import java.util.ArrayList;
import java.util.List;

public class Client {
	final String name;
	final List<Purchase> purchases = new ArrayList<>();

	Client(String name) {
		this.name = name;
	}

	void addPurchase(Purchase purchase) {
		this.purchases.add(purchase);
	}

	List<Purchase> getClientPurchases() {
		return purchases;
	}

	String totalExpenditure() {
		double value = 0;

		for (Purchase purchase : this.getClientPurchases()) {
			value += purchase.getPriceTotal();
		}

		return String.format("%s has already spent US$ %.2f", this.name, value);
	}
}
