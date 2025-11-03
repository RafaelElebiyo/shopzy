package com.ecommerce.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ecommerce.api.model.Category;
import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
    List<Category> findByParentCategoryId(Integer parentId);
}
