package oop.inheritance;

public class Game {

  public static void main(String[] args) {
    Player p1 = new Player(100, 100);
    Player p2 = new Player(103, 102);
    Player p3 = new Hero(101, 102);

    p1.walk(Direction.NORTH);
    p1.walk(Direction.WEST);
    p1.walk(Direction.NORTH);
    p1.walk(Direction.WEST);

    System.out.println("Player 1 coordinates: " + p1.x + " " + p1.y);
    System.out.println("Player 2 coordinates: " + p2.x + " " + p2.y);
    System.out.println("Player 3 coordinates: " + p3.x + " " + p3.y);
    System.out.print("\n");

    System.out.println("Player 1 life: " + p1.life);
    System.out.println("Player 2 life: " + p2.life);
    System.out.print("\n");

    System.out.println("Player 1 attack Player 2! \n");
    p1.attack(p2);

    System.out.println("Player 1 life: " + p1.life);
    System.out.println("Player 2 life: " + p2.life);
    System.out.print("\n");

    System.out.println("Player 3 (Hero) attack Player 1! \n");
    p3.attack(p1);

    System.out.println("Player 1 life: " + p1.life);
  }
}
