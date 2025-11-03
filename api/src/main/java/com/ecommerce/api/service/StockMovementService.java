package com.ecommerce.api.service;
import com.ecommerce.api.model.StockMovement;
import com.ecommerce.api.repository.StockMovementRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockMovementService {
    private final StockMovementRepository stockMovementRepository;
    public StockMovementService(StockMovementRepository stockMovementRepository) {
        this.stockMovementRepository = stockMovementRepository;
    }

    public List<StockMovement> getAllStockMovements() {
        return stockMovementRepository.findAll();
    }

    public StockMovement getStockMovementById(Long id) {
        return stockMovementRepository.findById(id).orElseThrow(() -> new RuntimeException("StockMovement not found with id " + id));
    }

    public StockMovement createStockMovement(StockMovement stockMovement) {
        return stockMovementRepository.save(stockMovement);
    }

    public StockMovement updateStockMovement(Long id, StockMovement stockMovement) {
        return stockMovementRepository.findById(id).map(existing -> {
            existing.setProduct(stockMovement.getProduct());
            existing.setQuantity(stockMovement.getQuantity());
            existing.setMovementType(stockMovement.getMovementType());
            existing.setCreatedAt(stockMovement.getCreatedAt());
            return stockMovementRepository.save(existing);
        }).orElseThrow(() -> new RuntimeException("StockMovement not found with id " + id));
    }

    public boolean deleteStockMovement(Long id) {
        if (!stockMovementRepository.existsById(id)) {
            return false;
        }
        stockMovementRepository.deleteById(id);
        return true;
    }
}
