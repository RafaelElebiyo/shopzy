package com.ecommerce.api.model;

import lombok.*;
import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "products")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    private String name;
    private String description;
    private String shortDescription;
    private Double price;
    private Integer stockQuantity;
    private String sku;
    private Boolean active;
    
    @Builder.Default
    private Double averageRating = 0.0;

    @Column(name = "created_at", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime createdAt;

    // Relación con Category
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    // Relación con Tax
    @ManyToOne
    @JoinColumn(name = "tax_id")
    private Tax tax;

    // Relación con Brand (debes crear esta entidad)
    @ManyToOne
    @JoinColumn(name = "brand_id")
    @JsonManagedReference
    private Brand brand;

    // Relación con imágenes
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    @JsonManagedReference
    private List<ProductImage> images = new ArrayList<>();

    // Relación con reviews
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    @JsonManagedReference
    private List<Review> reviews = new ArrayList<>();

    // Relación con movimientos de stock
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    @JsonManagedReference
    private List<StockMovement> stockMovements = new ArrayList<>();

    // Método para actualizar stock
    public void updateStock(Integer quantity, StockMovement.MovementType movementType) {
        if (movementType == StockMovement.MovementType.IN) {
            this.stockQuantity += quantity;
        } else if (movementType == StockMovement.MovementType.OUT) {
            this.stockQuantity = Math.max(0, this.stockQuantity - quantity);
        } else if (movementType == StockMovement.MovementType.ADJUSTMENT) {
            this.stockQuantity = quantity;
        }
    }
}