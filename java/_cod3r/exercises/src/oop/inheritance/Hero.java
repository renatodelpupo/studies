package oop.inheritance;

public class Hero extends Player {

  public Hero(int x, int y) {
    super(x, y);
  }

  @Override
  public void attack(Player enemy) {
    super.attack(enemy);
    super.attack(enemy);
  }
}
