package com.ecommerce.api.service;

import com.ecommerce.api.model.Brand;
import com.ecommerce.api.repository.BrandRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BrandService {

    private final BrandRepository brandRepository;

    public BrandService(BrandRepository brandRepository) {
        this.brandRepository = brandRepository;
    }

    // Crear marca
    public Brand createBrand(Brand brand) {
        return brandRepository.save(brand);
    }

    // Obtener todas las marcas
    public List<Brand> getAllBrands() {
        return brandRepository.findAll();
    }

    // Obtener marca por id
    public Brand getBrandById(Integer id) {
        return brandRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Brand not found"));
    }

    // Actualizar marca
    public Brand updateBrand(Integer id, Brand brand) {
        return brandRepository.findById(id).map(existing -> {
            existing.setName(brand.getName());
            existing.setDescription(brand.getDescription());
            existing.setLogoUrl(brand.getLogoUrl());
            return brandRepository.save(existing);
        }).orElseThrow(() -> new RuntimeException("Brand not found"));
    }

    // Eliminar marca
    public boolean deleteBrand(Integer id) {
        if(!brandRepository.existsById(id)) {
            return false;
        }
        brandRepository.deleteById(id);
        return true;       
    }

    // Buscar marcas por nombre
    public List<Brand> searchBrandsByName(String name) {
        return brandRepository.findByNameContainingIgnoreCase(name);
    }

}