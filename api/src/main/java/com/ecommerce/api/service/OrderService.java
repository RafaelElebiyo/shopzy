package com.ecommerce.api.service;

import com.ecommerce.api.model.Order;
import com.ecommerce.api.repository.OrderRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class OrderService {
    private final OrderRepository orderRepository;
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public List<Order> getOrdersByUserId(Long userId) {
        return orderRepository.findByUser_UserId(userId);
    }

    public Order getOrderById(Long id) {
        return orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found with id " + id));
    }

    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    public Order updateOrder(Long id, Order order) {
        return orderRepository.findById(id).map(existing -> {
            existing.setUser(order.getUser());
            existing.setItems(order.getItems());
            existing.setTotal(order.getTotal());
            existing.setOrderDate(order.getOrderDate());
            return orderRepository.save(existing);
        }).orElseThrow(() -> new RuntimeException("Order not found with id " + id));
    }

    public boolean deleteOrder(Long id) {
        if (!orderRepository.existsById(id)) {
            return false;
        }
        orderRepository.deleteById(id);
        return true;
    }
}
