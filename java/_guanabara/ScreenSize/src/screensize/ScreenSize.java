package screensize;

import java.awt.Dimension;
import java.awt.Toolkit;

public class ScreenSize {

  public static void main(String[] args) {
    Dimension screenSize = Toolkit.getDefaultToolkit().getScreenSize();

    double height = screenSize.getHeight();
    double width = screenSize.getWidth();

    int heightInt = (int) height;
    int widthInt = (int) width;

    System.out.println("Your current resolution is " + widthInt + "x" + heightInt + "px.");
  }

}
