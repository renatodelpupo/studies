package com.ndp.exercisesspringboot.controllers;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/methods")
public class HttpMethodsController {

  @DeleteMapping
  public String delete() {
    return "Delete request";
  }

  @GetMapping
  public String get() {
    return "Get request";
  }

  @PatchMapping
  public String patch() {
    return "Patch request";
  }

  @PostMapping
  public String post() {
    return "Post request";
  }

  @PutMapping
  public String put() {
    return "Put request";
  }
}
