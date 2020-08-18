package com.ndp.exercisesspringboot.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ndp.exercisesspringboot.model.entities.Customer;

@RestController
@RequestMapping("/customer")
public class CustomerController {

  @GetMapping("/1")
  public Customer getCustomer() {
    return new Customer("123.456.789-00", 1, "Marina");
  }

  @GetMapping("/{id}")
  public Customer getCustomerById(@PathVariable int id) {
    return new Customer("234.567.891-00", id, "Luciana");
  }

  @GetMapping
  public Customer getCustomerById2(@RequestParam(name = "id", defaultValue = "0") int id) {
    return new Customer("345.678.912-00", id, "Renato");
  }
}
