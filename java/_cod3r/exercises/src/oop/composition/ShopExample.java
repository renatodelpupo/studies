package oop.composition;

public class ShopExample {

	public static void main(String[] args) {

		Shop shop1 = new Shop();
		shop1.customer = "John Doe";

		shop1.addProduct("Pen", 20, 7.45);
		shop1.addProduct(new Product("Eraser", 12, 3.89));
		shop1.addProduct(new Product("Notebook", 3, 18.79));

		System.out.println(shop1.items.size());
		System.out.println(shop1.getTotalPrice());

		// bidirectional interface
		double total = shop1.items.get(0).shop.items.get(1).shop.getTotalPrice();
		System.out.println("The total is US$ " + total);
	}
}
