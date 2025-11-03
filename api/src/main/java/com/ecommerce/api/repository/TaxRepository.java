package com.ecommerce.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ecommerce.api.model.Tax;

public interface TaxRepository extends JpaRepository<Tax, Integer> {

}
