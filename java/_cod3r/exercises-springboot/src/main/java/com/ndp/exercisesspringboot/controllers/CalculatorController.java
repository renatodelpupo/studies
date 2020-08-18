package com.ndp.exercisesspringboot.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/calculator")
public class CalculatorController {

  @GetMapping("/add/{a}/{b}")
  public int add(@PathVariable int a, @PathVariable int b) {
    return a + b;
  }

  @GetMapping("/sub")
  public int sub(@RequestParam(name = "a") int a, @RequestParam(name = "b") int b) {
    return a - b;
  }
}
