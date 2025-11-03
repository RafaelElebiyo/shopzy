package com.ecommerce.api.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.ecommerce.api.model.Role;


public interface RoleRepository extends JpaRepository<Role, Integer> {

}
