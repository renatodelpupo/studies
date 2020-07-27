package oop.polymorphism;

public class Dinner {
  public static void main(String[] args) {
    Person guest = new Person(99.65);

    Rice food1 = new Rice(0.2);
    Bean food2 = new Bean(0.1);
    Food food3 = new Rice(0.3);

    System.out.println(guest.getWeight());

    guest.eat(food1);
    guest.eat(food2);
    guest.eat(food3);
    System.out.println(guest.getWeight());

    IceCream dessert = new IceCream(0.4);

    guest.eat(dessert);
    System.out.println(guest.getWeight());
  }
}
