package com.ecommerce.api.service;

import com.ecommerce.api.model.Role;
import com.ecommerce.api.repository.RoleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {

    private final RoleRepository roleRepository;

    public RoleService(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }

    public Role getRoleById(Integer id) {
        return roleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Role not found with id " + id));
    }

    public Role createRole(Role role) {
        return roleRepository.save(role);
    }

    public Role updateRole(Integer id, Role role) {
        return roleRepository.findById(id).map(existing -> {
            existing.setName(role.getName());
            return roleRepository.save(existing);
        }).orElseThrow(() -> new RuntimeException("Role not found with id " + id));
    }

    public boolean deleteRole(Integer id) {
        if (!roleRepository.existsById(id)) {
            return false;
        }
        roleRepository.deleteById(id);
        return true;
    }
}
