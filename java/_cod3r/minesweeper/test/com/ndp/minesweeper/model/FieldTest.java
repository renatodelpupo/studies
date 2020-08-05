package com.ndp.minesweeper.model;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class FieldTest {
  private Field field;

  @BeforeEach
  void createField() {
    field = new Field(3, 3);
  }

  @Test
  void testBottomBorder() {
    Field borderer = new Field(4, 3);
    boolean result = field.addBorderer(borderer);
    assertTrue(result);
  }

  @Test
  void testDiagonalBorder() {
    Field borderer = new Field(2, 2);
    boolean result = field.addBorderer(borderer);
    assertTrue(result);
  }

  @Test
  void testLeftBorder() {
    Field borderer = new Field(3, 2);
    boolean result = field.addBorderer(borderer);
    assertTrue(result);
  }

  @Test
  void testNoBorder() {
    Field borderer = new Field(1, 1);
    boolean result = field.addBorderer(borderer);
    assertFalse(result);
  }

  @Test
  void testRightBorder() {
    Field borderer = new Field(3, 4);
    boolean result = field.addBorderer(borderer);
    assertTrue(result);
  }

  @Test
  void testTopBorder() {
    Field borderer = new Field(2, 3);
    boolean result = field.addBorderer(borderer);
    assertTrue(result);
  }
}
