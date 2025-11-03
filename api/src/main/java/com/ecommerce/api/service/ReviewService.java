package com.ecommerce.api.service;

import com.ecommerce.api.model.Review;
import com.ecommerce.api.repository.ReviewRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class ReviewService {
    private final ReviewRepository reviewRepository;


    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }
    public Review getReviewById(Long id) {
        return reviewRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Review not found with id " + id));
    }

    public Review createReview(Review review) {
        return reviewRepository.save(review);
    }
    public Review updateReview(Long id, Review review) {
        return reviewRepository.findById(id)
                .map(existingReview -> {
                    existingReview.setUser(review.getUser());
                    existingReview.setRating(review.getRating());
                    existingReview.setComment(review.getComment());
                    existingReview.setProduct(review.getProduct());
                    existingReview.setReviewDate(review.getReviewDate());
                    return reviewRepository.save(existingReview);
                })
                .orElseThrow(() -> new RuntimeException("Review not found with id " + id));
    }

    public boolean deleteReview(Long id) {
        if(!reviewRepository.existsById(id)) {
            return false;
        }
        reviewRepository.deleteById(id);
        return true;    
    }

}
