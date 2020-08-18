package com.ndp.exercisesspringboot.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ndp.exercisesspringboot.model.entities.Product;
import com.ndp.exercisesspringboot.model.repositories.ProductRepository;

@RestController
@RequestMapping("/api/products")
public class ProductController {

  @Autowired
  private ProductRepository productRepository;

  @PostMapping
  public Product newProduct(@RequestParam String name) {
    Product product = new Product(name);
    productRepository.save(product);

    return product;
  }
}
