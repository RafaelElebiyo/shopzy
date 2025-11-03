package com.ecommerce.api.model;

import lombok.*;
import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "orders")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer orderId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "address_id", nullable = false)
    private Address address;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    private OrderStatus status = OrderStatus.PENDING;

    @Column(name = "order_date", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime orderDate;

    private Double total;

    @OneToMany(mappedBy = "order")
    @JsonManagedReference
    private List<OrderItem> items;

    @OneToMany(mappedBy = "order")
    @JsonBackReference
    private List<OrderHistory> history;

    @OneToMany(mappedBy = "order")
    @JsonManagedReference
    private List<Payment> payments;

    @OneToMany(mappedBy = "order")
    @JsonManagedReference
    private List<Delivery> deliveries;

    @ManyToMany
    @JoinTable(
        name = "order_coupons",
        joinColumns = @JoinColumn(name = "order_id"),
        inverseJoinColumns = @JoinColumn(name = "coupon_id")
    )
    @JsonManagedReference
    private List<Coupon> coupons;

    public enum OrderStatus { PENDING, PAID, SHIPPED, DELIVERED, CANCELLED }
}
