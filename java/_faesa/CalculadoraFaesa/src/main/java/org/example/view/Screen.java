package org.example.view;

import org.example.controller.Calculation;
import org.example.enums.Operators;

import javax.swing.*;
import java.util.Map;

public class Screen extends JFrame {
  private JButton actionClean;
  private JButton actionResult;
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
  private JButton operatorMultiplication;
  private JButton operatorSubtraction;
  public JPanel calculator;
  private JPanel keyboard;
  private JTextField display;

  private final Calculation calculation = new Calculation();
  private final String initialValue = "0";
  private Operators calculationOperator;

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

  private void registerActionsListeners() {
    actionClean.addActionListener(e -> {
      clearDisplay();
      calculation.clean();
    });

    actionResult.addActionListener(e -> {
      int intNumber = Integer.parseInt(display.getText());
      calculation.calculate(calculationOperator, intNumber);

      int intResult = calculation.getTotal();
      String stringResult = Integer.toString(intResult);
      display.setText(stringResult);
    });
  }

  private void registerNumbersListeners() {
    JButton[] numbers = {number0, number1, number2, number3, number4, number5, number6, number7, number8, number9};
    for (JButton number : numbers) {
      number.addActionListener(e -> printOnDisplay(number.getText()));
    }
  }

  private void registerOperatorsListeners() {
    Map<JButton, Operators> operators = Map.of(
      operatorAddition, Operators.ADDITION,
      operatorDivision, Operators.DIVISION,
      operatorMultiplication, Operators.MULTIPLICATION,
      operatorSubtraction, Operators.SUBTRACTION
    );
    operators.forEach((button, operator) -> button.addActionListener(e -> {
      int intNumber = Integer.parseInt(display.getText());
      calculation.setSubtotal(intNumber);
      calculationOperator = operator;
      clearDisplay();
    }));
  }

  public Screen() {
    registerActionsListeners();
    registerNumbersListeners();
    registerOperatorsListeners();
  }
}
