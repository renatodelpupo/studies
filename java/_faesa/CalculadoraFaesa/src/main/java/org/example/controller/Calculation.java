package org.example.controller;

import org.example.enums.Operators;

public class Calculation {
  private int total;

  public Calculation() {
    total = 0;
  }

  public int calculate(Operators operator, int value) {
    if (operator.equals(Operators.ADDITION)) {
      total += value;
    } else if (operator.equals(Operators.DIVISION)) {
      total /= value;
    } else if (operator.equals(Operators.MULTIPLICATION)) {
      total *= value;
    } else if (operator.equals(Operators.SUBTRACTION)) {
      total -= value;
    }

    return total;
  }

  public void clean() {
    total = 0;
  }

  public int getTotal() {
    return this.total;
  }

  public void setSubtotal(int value) {
    total = value;
  }
}
