package org.example.view;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Screen extends JFrame {
  private JButton actionClean;
  private JButton number0;
  private JButton number1;
  private JButton number2;
  private JButton number3;
  private JButton number4;
  private JButton number5;
  private JButton number6;
  private JButton number7;
  private JButton number8;
  private JButton number9;
  private JButton operatorAddition;
  private JButton operatorDivision;
  private JButton operatorEquals;
  private JButton operatorMultiplication;
  private JButton operatorSubtraction;
  public JPanel calculator;
  private JPanel keyboard;
  private JTextField display;

  private void printOnDisplay(String newInput) {
    String visorValue = display.getText();

    if (visorValue.equals("0")) {
      display.setText(newInput);
      return;
    }

    display.setText(visorValue + newInput);
  }

  public Screen() {
    actionClean.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        display.setText("0");
      }
    });

    JButton[] numberButtons = {number0, number1, number2, number3, number4, number5, number6, number7, number8, number9};
    for (JButton numberButton : numberButtons) {
      numberButton.addActionListener(e -> printOnDisplay(numberButton.getText()));
    }
  }
}
