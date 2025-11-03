package com.ecommerce.api.service;

import com.ecommerce.api.model.OrderHistory;
import com.ecommerce.api.repository.OrderHistoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderHistoryService {
    private final OrderHistoryRepository orderHistoryRepository;

    public OrderHistoryService(OrderHistoryRepository orderHistoryRepository) {
        this.orderHistoryRepository = orderHistoryRepository;
    }

    public List<OrderHistory> getAllOrderHistories() {
        return orderHistoryRepository.findAll();
    }

    public OrderHistory getOrderHistoryById(Long id) {
        return orderHistoryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("OrderHistory not found with id " + id));
    }

    public OrderHistory createOrderHistory(OrderHistory orderHistory) {
        return orderHistoryRepository.save(orderHistory);
    }

    public OrderHistory updateOrderHistory(Long id, OrderHistory orderHistory) {
        return orderHistoryRepository.findById(id).map(existing -> {
            existing.setOrder(orderHistory.getOrder());
            existing.setStatus(orderHistory.getStatus());
            existing.setChangedAt(orderHistory.getChangedAt());
            existing.setChangedBy(orderHistory.getChangedBy());
            return orderHistoryRepository.save(existing);
        }).orElseThrow(() -> new RuntimeException("OrderHistory not found with id " + id));
    }

    public boolean deleteOrderHistory(Long id) {
        if (!orderHistoryRepository.existsById(id)) {
            return false;
        }
        orderHistoryRepository.deleteById(id);
        return true;
    }
}
