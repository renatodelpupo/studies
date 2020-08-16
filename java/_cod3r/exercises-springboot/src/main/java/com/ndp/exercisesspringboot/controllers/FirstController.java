package com.ndp.exercisesspringboot.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FirstController {

  @GetMapping(path = "/welcome")
  public String hello() {
    return "Hello Spring Boot";
  }
}
