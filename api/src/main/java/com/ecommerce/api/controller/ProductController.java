package com.ecommerce.api.controller;

import com.ecommerce.api.model.*;
import com.ecommerce.api.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    @GetMapping("/price-range")
    public Map<String, Double> getPriceRange() {
        return productService.getPriceRange();
    }

    @GetMapping("/by-price-range")
    public List<Product> getProductsByPriceRange(@RequestParam Double min, @RequestParam Double max) {
        return productService.getProductsByPriceRange(min, max);
    }

    @PostMapping("")
    public Product createProduct(@RequestBody Product product) {
        return productService.createProduct(product);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product product) {
        return productService.updateProduct(id, product);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
    }

    @GetMapping("/{id}/related")
    public List<Product> getRelatedProducts(@PathVariable Long id) {
        return productService.getRelatedProducts(id);
    }

    @GetMapping("/{id}/reviews")
    public List<Review> getProductReviews(@PathVariable Long id) {
        return productService.getProductReviews(id);
    }

    @GetMapping("/{id}/stock-movements")
    public List<StockMovement> getProductStockMovements(@PathVariable Long id) {
        return productService.getProductStockMovements(id);
    }

    @GetMapping("/{categoryId}/by-category")
    public List<Product> getProductsByCategory(@PathVariable Long categoryId) {
        return productService.getProductsByCategory(categoryId);
    }

    @GetMapping("/{brandId}/by-brand")
    public List<Product> getProductsByBrand(@PathVariable Long brandId) {
        return productService.getProductsByBrand(brandId);
    }

    @GetMapping("/popular")
    public List<Product> getPopularProducts() {
        return productService.getPopularProducts();
    }

    @GetMapping("/top-rated")
    public List<Product> getTopRatedProducts() {
        return productService.getTopRatedProducts();
    }

    @GetMapping("/new-arrivals")
    public List<Product> getNewArrivals() {
        return productService.getNewArrivals();
    }

    @GetMapping("/search")
    public List<Product> searchProducts(@RequestParam String query) {
        return productService.searchProducts(query);
    }

    @GetMapping("/by-rating")
    public List<Product> getProductsByRating(@RequestParam Double rating) {
        return productService.getProductsByRating(rating);
    }

}