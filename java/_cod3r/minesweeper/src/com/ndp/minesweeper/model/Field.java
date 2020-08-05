package com.ndp.minesweeper.model;

import java.util.ArrayList;
import java.util.List;

public class Field {
  private final int column;
  private final int row;

  private boolean hasMine;
  private boolean marked;
  private boolean opened;

  private List<Field> borderer = new ArrayList<>();

  Field(int column, int row) {
    this.column = column;
    this.row = row;
  }

  boolean addBorderer(Field borderer) {

  }
}
