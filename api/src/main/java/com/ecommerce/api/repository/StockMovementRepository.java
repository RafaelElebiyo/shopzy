package com.ecommerce.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ecommerce.api.model.StockMovement;

public interface StockMovementRepository extends JpaRepository<StockMovement, Long> {

}
