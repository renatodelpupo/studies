package lambdas;

import java.util.function.Function;
import java.util.function.UnaryOperator;

public class BinaryOperatorChallenge {
  public static void main(String[] args) {
    Product p = new Product("Laptop", 6999.99, 0.14);

    Function<Product, Double> getPriceWithDiscount = product -> product.price * (1 - product.discount);
    double priceWithDiscount = getPriceWithDiscount.apply(p);
    System.out.println(priceWithDiscount);

    UnaryOperator<Double> getPriceWithTaxes = price -> price >= 2500 ? price * 1.085 : price;
    double priceWithDiscountAndTaxes = getPriceWithDiscount.andThen(getPriceWithTaxes).apply(p);
    System.out.println(priceWithDiscountAndTaxes);

    UnaryOperator<Double> getPriceWithShipping = price -> price >= 3000 ? price + 100 : price + 50;
    double priceWithDiscountAndTaxesAndShipping = getPriceWithDiscount
        .andThen(getPriceWithTaxes).andThen(getPriceWithShipping).apply(p);
    System.out.println(priceWithDiscountAndTaxesAndShipping);

    UnaryOperator<Double> getPriceRounded = price -> Double.parseDouble(String.format("%.2f", price));
    double priceWithDiscountAndTaxesAndShippingRounded = getPriceWithDiscount
        .andThen(getPriceWithTaxes).andThen(getPriceWithShipping).andThen(getPriceRounded).apply(p);
    System.out.println(priceWithDiscountAndTaxesAndShippingRounded);

    Function<Double, String> format = price -> ("US$ " + price).replace(".", ",");

    String price = getPriceWithDiscount
        .andThen(getPriceWithTaxes)
        .andThen(getPriceWithShipping)
        .andThen(getPriceRounded)
        .andThen(format)
        .apply(p);
    
    System.out.println(price);
  }
}
