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

    number0.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        printOnDisplay(number0.getText());
      }
    });

    number1.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        printOnDisplay(number1.getText());
      }
    });

    number2.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        printOnDisplay(number2.getText());
      }
    });

    number3.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        printOnDisplay(number3.getText());
      }
    });

    number4.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        printOnDisplay(number4.getText());
      }
    });

    number5.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        printOnDisplay(number5.getText());
      }
    });

    number6.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        printOnDisplay(number6.getText());
      }
    });

    number7.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        printOnDisplay(number7.getText());
      }
    });

    number8.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        printOnDisplay(number8.getText());
      }
    });

    number9.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        printOnDisplay(number9.getText());
      }
    });
  }
}
