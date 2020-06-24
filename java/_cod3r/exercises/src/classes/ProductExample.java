package classes;

public class ProductExample {

	public static void main(String[] args) {

		Product p1 = new Product();
		p1.name = "Laptop";
		p1.price = 3999.99;
		p1.discount = 0.4;

		Product p2 = new Product();
		p2.name = "Pencil";
		p2.price = 4.39;
		p2.discount = 0.15;

		System.out.println(p1.getSalePrice());

	}
}
