package com.ndp.exercisesspringboot.models;

public class Customer {

  private String cpf;
  private int id;
  private String name;

  public Customer(String cpf, int id, String name) {
    super();
    this.cpf = cpf;
    this.id = id;
    this.name = name;
  }

  public String getCpf() {
    return cpf;
  }

  public void setCpf(String cpf) {
    this.cpf = cpf;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }
}
