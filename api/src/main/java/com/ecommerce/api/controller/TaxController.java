package com.ecommerce.api.controller;

import com.ecommerce.api.model.Tax;
import com.ecommerce.api.service.TaxService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/taxes")
public class TaxController {

    private final TaxService taxService;

    public TaxController(TaxService taxService) {
        this.taxService = taxService;
    }

    @GetMapping("")
    public List<Tax> getAllTaxes() {
        return taxService.getAllTaxes();
    }

    @GetMapping("/{id}")
    public Tax getTaxById(@PathVariable Integer id) {
        return taxService.getTaxById(id);
    }

    @PostMapping("")
    public Tax createTax(@RequestBody Tax tax) {
        return taxService.createTax(tax);
    }

    @PutMapping("/{id}")
    public Tax updateTax(@PathVariable Integer id, @RequestBody Tax tax) {
        return taxService.updateTax(id, tax);
    }

    @DeleteMapping("/{id}")
    public boolean deleteTax(@PathVariable Integer id) {
        return taxService.deleteTax(id);
    }

}
