package com.ecommerce.api.service;

import com.ecommerce.api.model.Category;
import com.ecommerce.api.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    // Crear categoría
    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }

    // Obtener todas
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    // Obtener por id
    public Category getCategoryById(Integer id) {
        return categoryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Category not found"));
    }

    // Actualizar
    public Category updateCategory(Integer id, Category category) {
        return categoryRepository.findById(id).map(existing -> {
            existing.setName(category.getName());
            return categoryRepository.save(existing);
        }).orElseThrow(() -> new RuntimeException("Category not found"));
    }

    // Eliminar
    public boolean deleteCategory(Integer id) {
        if(!categoryRepository.existsById(id)) {
            return false;
        }
        categoryRepository.deleteById(id);
        return true;       
    }

    // Añadir subcategoría
    public Category addSubCategory(Integer parentId, Category subCategory) {
        Category parent = categoryRepository.findById(parentId)
                .orElseThrow(() -> new RuntimeException("Parent category not found"));
        subCategory.setParent(parent);
        return categoryRepository.save(subCategory);
    }

    // Obtener todas las subcategorías de una categoría
    public List<Category> getSubCategories(Integer parentId) {
        return categoryRepository.findByParentCategoryId(parentId);
    }


}
