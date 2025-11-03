package com.ecommerce.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.ecommerce.api.model.Product;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByCategory_CategoryId(Long categoryId);

    List<Product> findByBrand_BrandId(Long brandId);

    @Query("SELECT p FROM Product p ORDER BY p.stockQuantity DESC LIMIT 10")
    List<Product> findPopularProducts();

    @Query("SELECT p FROM Product p ORDER BY p.averageRating DESC LIMIT 10")
    List<Product> findTopRatedProducts();

    @Query("SELECT p FROM Product p ORDER BY p.createdAt DESC LIMIT 10")
    List<Product> findNewArrivals();

    @Query("SELECT p FROM Product p WHERE LOWER(p.name) LIKE LOWER(CONCAT('%', :query, '%')) " +
            "OR LOWER(p.description) LIKE LOWER(CONCAT('%', :query, '%'))")
    List<Product> searchProducts(String query);

    // 🔹 Para rango de precios (mínimo y máximo)
    @Query("SELECT MIN(p.price) FROM Product p")
    Double findMinPrice();

    @Query("SELECT MAX(p.price) FROM Product p")
    Double findMaxPrice();

    // 🔹 Para obtener productos dentro de un rango de precios
    @Query("SELECT p FROM Product p WHERE p.price BETWEEN :minPrice AND :maxPrice")
    List<Product> findProductsByPriceRange(Double minPrice, Double maxPrice);

    List<Product> findByAverageRatingGreaterThanEqualOrderByAverageRatingDesc(Double rating);

}
