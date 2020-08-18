package com.ndp.exercisesspringboot.model.repositories;

import org.springframework.data.repository.CrudRepository;

import com.ndp.exercisesspringboot.model.entities.Product;

public interface ProductRepository extends CrudRepository<Product, Integer> {
}
