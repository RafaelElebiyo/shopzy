package com.ecommerce.api.model;

import lombok.*;
import jakarta.persistence.*;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "brands")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Brand {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer brandId;

    private String name;
    private String description;
    private String logoUrl;

    @OneToMany(mappedBy = "brand")
    @JsonIgnore
    private List<Product> products;
}