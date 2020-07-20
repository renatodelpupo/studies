package oop.inheritance;

public class Game {

  public static void main(String[] args) {
    Player p1 = new Player();
    p1.x = 100;
    p1.y = 100;

    p1.walk(Direction.NORTH);
    p1.walk(Direction.WEST);
    p1.walk(Direction.NORTH);
    p1.walk(Direction.WEST);

    System.out.println(p1.x);
    System.out.println(p1.y);
  }
}
