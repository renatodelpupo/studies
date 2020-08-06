package com.ndp.minesweeper.model;

import java.util.ArrayList;
import java.util.List;

import com.ndp.minesweeper.exception.ExplosionException;

public class Field {
  private final int column;
  private final int row;

  private boolean hasMine;
  private boolean marked;
  private boolean opened;

  private List<Field> borderers = new ArrayList<>();

  Field(int column, int row) {
    this.column = column;
    this.row = row;
  }

  boolean addBorderer(Field borderer) {
    boolean checkColumn = column != borderer.column;
    boolean checkRow = row != borderer.row;
    boolean diagonal = checkColumn && checkRow;

    int columnDiff = Math.abs(column - borderer.column);
    int rowDiff = Math.abs(row - borderer.row);
    int generalDiff = columnDiff + rowDiff;

    if (generalDiff == 1 && !diagonal) {
      borderers.add(borderer);
      return true;
    } else if (generalDiff == 2 && diagonal) {
      borderers.add(borderer);
      return true;
    } else {
      return false;
    }
  }

  boolean open() {
    if (!opened && !marked) {
      opened = true;

      if (hasMine) {
        throw new ExplosionException();
      }

      if (safeBorderer()) {
        borderers.forEach(v -> v.open());
      }

      return true;
    } else {
      return false;
    }
  }

  boolean safeBorderer() {
    return borderers.stream().noneMatch(v -> v.hasMine);
  }

  void toggleMark() {
    if (!opened) {
      marked = !marked;
    }
  }
}
