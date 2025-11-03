package com.ecommerce.api.model;

import lombok.*;
import jakarta.persistence.*;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "taxes")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
public class Tax {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer taxId;

    private String name;
    private Double percentage;

    @OneToMany(mappedBy = "tax")
    @JsonBackReference
    private List<Product> products;
}
