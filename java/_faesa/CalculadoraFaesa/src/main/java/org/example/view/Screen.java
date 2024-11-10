package org.example.view;

import org.example.controller.Calculation;
import org.example.enums.Operators;

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

  private final Calculation calculation;
  private final String initialValue = "0";
  private Operators operator;

  private void clearDisplay() {
    display.setText(initialValue);
  }

  private void printOnDisplay(String newInput) {
    String displayValue = display.getText();

    if (displayValue.equals(initialValue)) {
      display.setText(newInput);
      return;
    }

    display.setText(displayValue.concat(newInput));
  }

  public Screen() {
    calculation = new Calculation();

    actionClean.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        clearDisplay();
        calculation.clean();
      }
    });

    JButton[] numberButtons = {number0, number1, number2, number3, number4, number5, number6, number7, number8, number9};
    for (JButton numberButton : numberButtons) {
      numberButton.addActionListener(e -> printOnDisplay(numberButton.getText()));
    }

    operatorAddition.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        int intNumber = Integer.parseInt(display.getText());
        calculation.setSubtotal(intNumber);
        operator = Operators.ADDITION;
        clearDisplay();
      }
    });

    operatorDivision.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        int intNumber = Integer.parseInt(display.getText());
        calculation.setSubtotal(intNumber);
        operator = Operators.DIVISION;
        clearDisplay();
      }
    });

    operatorMultiplication.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        int intNumber = Integer.parseInt(display.getText());
        calculation.setSubtotal(intNumber);
        operator = Operators.MULTIPLICATION;
        clearDisplay();
      }
    });

    operatorSubtraction.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        int intNumber = Integer.parseInt(display.getText());
        calculation.setSubtotal(intNumber);
        operator = Operators.SUBTRACTION;
        clearDisplay();
      }
    });

    operatorEquals.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        int intNumber = Integer.parseInt(display.getText());
        calculation.calculate(operator, intNumber);

        int intResult = calculation.getTotal();
        String stringResult = Integer.toString(intResult);
        display.setText(stringResult);
      }
    });
  }
}
