package com.ecommerce.api.controller;

import com.ecommerce.api.model.StockMovement;
import com.ecommerce.api.service.StockMovementService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;




@RestController
@RequestMapping("/api/stock-movements")
public class StockMovementController {
    private final StockMovementService stockMovementService;
    public StockMovementController(StockMovementService stockMovementService) {
        this.stockMovementService = stockMovementService;
    }  
    
    @GetMapping("")
    public List<StockMovement> getAllStockMovements() {
        return stockMovementService.getAllStockMovements();

    }

    @PostMapping("")
    public StockMovement creaStockMovement(@RequestBody StockMovement stockMovement ) {
        return stockMovementService.createStockMovement(stockMovement);
    }
    
    @PutMapping("/{id}")
    public StockMovement updateStockMovement(@PathVariable Long id, @RequestBody StockMovement stockMovement) {
        return stockMovementService.updateStockMovement(id, stockMovement);
    }
    
    @DeleteMapping("/{id}")
    public boolean deleteStockMovement(@PathVariable Long id) {
        return stockMovementService.deleteStockMovement(id);
    }

}
