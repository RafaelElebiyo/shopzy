package com.ecommerce.api.service;

import com.ecommerce.api.model.OrderItem;
import com.ecommerce.api.repository.OrderItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderItemService {
    private final OrderItemRepository orderItemRepository;

    public OrderItemService(OrderItemRepository orderItemRepository) {
        this.orderItemRepository = orderItemRepository;
    }

    public List<OrderItem> getAllOrderItems() {
        return orderItemRepository.findAll();
    }

    public OrderItem getOrderItemById(Long id) {
        return orderItemRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("OrderItem not found with id " + id));
    }

    public OrderItem createOrderItem(OrderItem orderItem) {
        return orderItemRepository.save(orderItem);
    }

    public OrderItem updateOrderItem(Long id, OrderItem orderItem) {
        return orderItemRepository.findById(id).map(existing -> {
            existing.setOrder(orderItem.getOrder());
            existing.setProduct(orderItem.getProduct());
            existing.setQuantity(orderItem.getQuantity());
            existing.setUnitPrice(orderItem.getUnitPrice());
            return orderItemRepository.save(existing);
        }).orElseThrow(() -> new RuntimeException("OrderItem not found with id " + id));
    }

    public boolean deleteOrderItem(Long id) {
        if (!orderItemRepository.existsById(id)) {
            return false;
        }
        orderItemRepository.deleteById(id);
        return true;
    }
}
