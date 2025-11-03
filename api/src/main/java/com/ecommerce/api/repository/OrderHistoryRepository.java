package com.ecommerce.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ecommerce.api.model.OrderHistory;


public interface OrderHistoryRepository extends JpaRepository<OrderHistory, Long> {

}
