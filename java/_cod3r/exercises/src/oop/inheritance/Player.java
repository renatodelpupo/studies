package oop.inheritance;

public class Player {

  public int life = 100;
  public int x;
  public int y;

  public Player(int x, int y) {
    this.x = x;
    this.y = y;
  }

  public void attack(Player enemy) {
    int deltaX = Math.abs(x - enemy.x);
    int deltaY = Math.abs(y - enemy.y);

    if (deltaX == 1 && deltaY == 0) {
      enemy.life -= 10;
    }
  }

  public boolean walk(Direction direction) {
    switch (direction) {
    case NORTH:
      y++;
      break;
    case EAST:
      x--;
      break;
    case SOUTH:
      y--;
    case WEST:
      x++;
      break;
    }

    return true;
  }
}
