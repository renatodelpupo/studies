package oop.inheritance;

public class Player {

  public int x;
  public int y;

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
