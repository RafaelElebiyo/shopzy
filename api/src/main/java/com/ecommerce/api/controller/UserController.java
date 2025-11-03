package com.ecommerce.api.controller;

import com.ecommerce.api.model.User;
import com.ecommerce.api.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/customers")
    public List<User> getCustomers() {
        return userService.getUsersByRole("CUSTOMER");
    }

    @GetMapping("/deliverers")
    public List<User> getDeliverers() {
        return userService.getUsersByRole("DELIVERY_PERSON");
    }

    @GetMapping("/admins")
    public List<User> getAdmins() {
        return userService.getUsersByRole("ADMIN");
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @PostMapping("")
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        return userService.updateUser(id, user);
    }

    @DeleteMapping("/{id}")
    public boolean deleteUser(@PathVariable Long id) {
        return userService.deleteUser(id);
    }

}
