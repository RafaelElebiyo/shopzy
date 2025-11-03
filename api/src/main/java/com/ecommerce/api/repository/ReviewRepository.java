package com.ecommerce.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ecommerce.api.model.Review;


public interface ReviewRepository extends JpaRepository<Review, Long> {

}
