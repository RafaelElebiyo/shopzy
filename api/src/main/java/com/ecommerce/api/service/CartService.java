package com.ecommerce.api.service;

import com.ecommerce.api.model.Cart;
import com.ecommerce.api.repository.CartRepository;
import com.ecommerce.api.repository.UserRepository;

import org.springframework.stereotype.Service;

@Service
public class CartService {
    private CartRepository cartRepository;
    private UserRepository userRepository;

    public CartService(CartRepository cartRepository, UserRepository userRepository) {
        this.cartRepository = cartRepository;
        this.userRepository = userRepository;
    }

public Cart getCartByUserId(Long userId) {
    if (!userRepository.existsById(userId)) {
        return null; // o lanzar excepción, según tu lógica
    }
    return cartRepository.findByUser_UserId(userId)
            .orElseThrow(() -> new RuntimeException("Cart not found for user id " + userId));
}

    public Cart getCartById(Long id) {
        return cartRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Cart not found with id " + id));
    }

    public Cart createCart(Cart cart) {
        return cartRepository.save(cart);
    }

    public Cart updateCart(Long id, Cart cart) {
        return cartRepository.findById(id).map(existing -> {
            existing.setItems(cart.getItems());
            return cartRepository.save(existing);
        }).orElseThrow(() -> new RuntimeException("Cart not found with id " + id));
    }

    public boolean deleteCart(Long id) {
        if (!cartRepository.existsById(id)) {
            return false;
        }
        cartRepository.deleteById(id);
        return true;
    }
}
