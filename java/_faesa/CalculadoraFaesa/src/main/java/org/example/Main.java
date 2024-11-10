package org.example;

import javax.swing.*;

import org.example.view.Screen;

public class Main {
  public static void main(String[] args) {
    JFrame frame = new JFrame("Screen");
    frame.setContentPane(new Screen().calculator);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.pack();
    frame.setVisible(true);
  }
}
