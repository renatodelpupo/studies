package classes;

public class ProductExample {

	public static void main(String[] args) {

		Product p1 = new Product("Laptop", 3999.99);

		Product p2 = new Product();
		p2.name = "Pencil";
		p2.price = 4.39;
		Product.discount = 0.5;

		System.out.println(p1.getSalePrice());
		System.out.println(p2.getSalePrice());

	}
}
