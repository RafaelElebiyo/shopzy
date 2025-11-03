package com.ecommerce.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ecommerce.api.model.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
