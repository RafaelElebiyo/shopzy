package com.ecommerce.api.service;

import com.ecommerce.api.model.*;
import com.ecommerce.api.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Transactional
    public Product updateProduct(Long id, Product productDetails) {
        return productRepository.findById(id)
                .map(existingProduct -> {
                    // Actualizar campos básicos
                    existingProduct.setName(productDetails.getName());
                    existingProduct.setDescription(productDetails.getDescription());
                    existingProduct.setShortDescription(productDetails.getShortDescription());
                    existingProduct.setPrice(productDetails.getPrice());
                    existingProduct.setSku(productDetails.getSku());
                    existingProduct.setActive(productDetails.getActive());

                    // Actualizar relaciones
                    if (productDetails.getCategory() != null) {
                        existingProduct.setCategory(productDetails.getCategory());
                    }
                    if (productDetails.getTax() != null) {
                        existingProduct.setTax(productDetails.getTax());
                    }
                    if (productDetails.getBrand() != null) {
                        existingProduct.setBrand(productDetails.getBrand());
                    }

                    return productRepository.save(existingProduct);
                })
                .orElseThrow(() -> new RuntimeException("Product not found with id " + id));
    }

    public boolean deleteProduct(Long id) {
        if (!productRepository.existsById(id)) {
            return false;
        }
        productRepository.deleteById(id);
        return true;
    }

    public List<Product> getRelatedProducts(Long productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found with id " + productId));

        Category category = product.getCategory();
        if (category == null) {
            return List.of(); // No hay categoría, no hay productos relacionados
        }

        // Obtener productos de la misma categoría, excluyendo el producto actual
        return productRepository.findAll().stream()
                .filter(p -> p.getCategory() != null
                        && p.getCategory().getCategoryId().equals(category.getCategoryId()))
                .filter(p -> !p.getProductId().equals(productId))
                .toList();
    }

    // Método para obtener reviews de un producto
    public List<Review> getProductReviews(Long productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found with id " + productId));

        return product.getReviews();
    }

    // Método para obtener movimientos de stock de un producto
    public List<StockMovement> getProductStockMovements(Long productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found with id " + productId));

        return product.getStockMovements();
    }

    // Productos por categoría
    public List<Product> getProductsByCategory(Long categoryId) {
        return productRepository.findByCategory_CategoryId(categoryId);
    }

    // Productos por marca
    public List<Product> getProductsByBrand(Long brandId) {
        return productRepository.findByBrand_BrandId(brandId);
    }

    // Productos populares
    public List<Product> getPopularProducts() {
        return productRepository.findPopularProducts();
    }

    // Productos mejor valorados
    public List<Product> getTopRatedProducts() {
        return productRepository.findTopRatedProducts();
    }

    // Nuevos productos
    public List<Product> getNewArrivals() {
        return productRepository.findNewArrivals();
    }

    // Búsqueda
    public List<Product> searchProducts(String query) {
        return productRepository.searchProducts(query);
    }

    public Map<String, Double> getPriceRange() {
        Double minPrice = productRepository.findMinPrice();
        Double maxPrice = productRepository.findMaxPrice();

        // Evitar nulos si no hay productos
        if (minPrice == null || maxPrice == null) {
            minPrice = 0.0;
            maxPrice = 0.0;
        }

        // Calcular el precio intermedio (promedio)
        Double midPrice = (minPrice + maxPrice) / 2;

        Map<String, Double> priceRange = new HashMap<>();
        priceRange.put("minPrice", minPrice);
        priceRange.put("maxPrice", maxPrice);
        priceRange.put("midPrice", midPrice);

        return priceRange;
    }

    public List<Product> getProductsByPriceRange(Double minPrice, Double maxPrice) {
        if (minPrice == null || maxPrice == null) {
            throw new IllegalArgumentException("Both minPrice and maxPrice must be provided.");
        }
        return productRepository.findProductsByPriceRange(minPrice, maxPrice);
    }

    public List<Product> getProductsByRating(Double rating) {
        if (rating == null || rating < 0 || rating > 5) {
            throw new IllegalArgumentException("Rating must be between 0 and 5.");
        }
        return productRepository.findByAverageRatingGreaterThanEqualOrderByAverageRatingDesc(rating);
    }

}