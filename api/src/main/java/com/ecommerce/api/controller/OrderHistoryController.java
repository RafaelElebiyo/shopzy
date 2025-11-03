package com.ecommerce.api.controller;

import com.ecommerce.api.model.OrderHistory;
import com.ecommerce.api.service.OrderHistoryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/order-history")   
public class OrderHistoryController {
    private final OrderHistoryService orderHistoryService;
    public OrderHistoryController(OrderHistoryService orderHistoryService) {
        this.orderHistoryService = orderHistoryService;
    }
    @GetMapping("")
    public List<OrderHistory> getAllOrderHistories() {
        return orderHistoryService.getAllOrderHistories();
    }

    @GetMapping("/{id}")
    public OrderHistory getOrderHistoryById(@PathVariable Long id) {
        return orderHistoryService.getOrderHistoryById(id);
    }

    @PostMapping("")
    public OrderHistory createOrderHistory(@RequestBody OrderHistory orderHistory) {
        return orderHistoryService.createOrderHistory(orderHistory);
    }

    @PutMapping("/{id}")
    public OrderHistory updateOrderHistory(@PathVariable Long id, @RequestBody OrderHistory orderHistory) {
        return orderHistoryService.updateOrderHistory(id, orderHistory);
    }

    @DeleteMapping("/{id}")
    public void deleteOrderHistory(@PathVariable Long id) {
        orderHistoryService.deleteOrderHistory(id);
    }
}
