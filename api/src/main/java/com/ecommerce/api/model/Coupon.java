package com.ecommerce.api.model;

import lombok.*;
import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "coupons")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Coupon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer couponId;

    @Column(unique = true, nullable = false)
    private String code;

    private Double discountPercent;
    private Double discountAmount;
    private LocalDate startDate;
    private LocalDate endDate;
    private Integer maxUses;

    @Builder.Default
    private Integer currentUses = 0;

    @ManyToMany(mappedBy = "coupons")
    @JsonBackReference
    private List<Order> orders;
}
