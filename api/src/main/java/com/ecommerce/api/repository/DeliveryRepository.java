package com.ecommerce.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ecommerce.api.model.Delivery;


public interface DeliveryRepository extends JpaRepository<Delivery, Long> {

}
