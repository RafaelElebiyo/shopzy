package com.ecommerce.api.service;

import com.ecommerce.api.model.User;
import com.ecommerce.api.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public List<User> getUsersByRole(String role) {
        return userRepository.findByRoles_Name(role);
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(Long id, User user) {
        return userRepository.findById(id).map(existing -> {
            existing.setName(user.getName());
            existing.setEmail(user.getEmail());
            existing.setPhone(user.getPhone());
            existing.setAddresses(user.getAddresses());
            existing.setRegistrationDate(user.getRegistrationDate());
            existing.setRoles(user.getRoles());
            existing.setPassword(user.getPassword());
            return userRepository.save(existing);
        }).orElse(null);
    }

    public boolean deleteUser(Long id) {
        if (!userRepository.existsById(id)) {
            return false;
        }
        userRepository.deleteById(id);
        return true;    
    }
}
