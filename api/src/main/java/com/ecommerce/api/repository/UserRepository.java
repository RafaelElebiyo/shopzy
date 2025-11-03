package com.ecommerce.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ecommerce.api.model.User;
import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByRoles_Name(String roleName);
}

