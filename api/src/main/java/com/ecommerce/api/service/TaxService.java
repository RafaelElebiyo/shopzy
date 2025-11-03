package com.ecommerce.api.service;

import com.ecommerce.api.model.Tax;
import com.ecommerce.api.repository.TaxRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaxService {

    private final TaxRepository taxRepository;

    public TaxService(TaxRepository taxRepository) {
        this.taxRepository = taxRepository;
    }

    public List<Tax> getAllTaxes() {
        return taxRepository.findAll();
    }

    public Tax getTaxById(Integer id) {
        return taxRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tax not found with id " + id));
    }

    public Tax createTax(Tax tax) {
        return taxRepository.save(tax);
    }

    public Tax updateTax(Integer id, Tax tax) {
        return taxRepository.findById(id).map(existing -> {
            existing.setName(tax.getName());
            existing.setPercentage(tax.getPercentage());
            return taxRepository.save(existing);
        }).orElseThrow(() -> new RuntimeException("Tax not found with id " + id));
    }

    public boolean deleteTax(Integer id) {
        if (!taxRepository.existsById(id)) {
            return false;
        }
        taxRepository.deleteById(id);
        return true;
    }
}
