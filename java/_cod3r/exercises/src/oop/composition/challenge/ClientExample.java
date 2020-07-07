package oop.composition.challenge;

public class ClientExample {

	public static void main(String[] args) {
		Client client01 = new Client("Marina");

		Product product01 = new Product("Pró Laranja", "Orange juice 300ml", 6.90);

		Purchase purchase01 = new Purchase(1);
		purchase01.addItemToCart(product01, 10);
		purchase01.addItemToCart(new Product("Kebis", "Cheese disks", 4.80), 10);
		purchase01.showReceipt();
		System.out.print("\n");

		Purchase purchase02 = new Purchase(2);
		purchase02.addItemToCart("Reggiani", "Bananinha 920ml", 119.90, 4);
		purchase02.purchaseItems.add(new PurchaseItem(new Product("Meridiano", "Café Classic 500gr", 17.60), 2));
		purchase02.showReceipt();

		client01.addPurchase(purchase01);
		client01.purchases.add(purchase02);
		System.out.println("\n" + client01.totalExpenditure());
	}
}
