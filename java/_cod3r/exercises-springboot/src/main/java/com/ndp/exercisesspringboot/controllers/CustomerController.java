package com.ndp.exercisesspringboot.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ndp.exercisesspringboot.models.Customer;

@RestController
@RequestMapping("/customer")
public class CustomerController {

  @GetMapping("/1")
  public Customer getCustomer() {
    return new Customer("123.456.789-00", 1, "Marina");
  }
}
