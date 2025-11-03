package com.ecommerce.api.service;
import com.ecommerce.api.model.CartItem;
import com.ecommerce.api.repository.CartItemRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartItemService {
    private final CartItemRepository cartItemRepository;
    public CartItemService(CartItemRepository cartItemRepository) {
        this.cartItemRepository = cartItemRepository;
    }

    public List<CartItem> getAllCartItems() {
        return cartItemRepository.findAll();
    }

    public List<CartItem> getAllCartItemsByCartId(Integer cartId) {
        return cartItemRepository.findByCartId(cartId);
    }

    public CartItem getCartItemById(Long id) {
        return cartItemRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("CartItem not found with id " + id));
    }

    public CartItem createCartItem(CartItem cartItem) {
        return cartItemRepository.save(cartItem);
    }

    public CartItem updateCartItem(Long id, CartItem cartItem) {
        return cartItemRepository.findById(id).map(existing -> {
            existing.setProduct(cartItem.getProduct());
            existing.setQuantity(cartItem.getQuantity());
            return cartItemRepository.save(existing);
        }).orElseThrow(() -> new RuntimeException("CartItem not found with id " + id));
    }

    public boolean deleteCartItem(Long id) {
        if (!cartItemRepository.existsById(id)) {
            return false;
        }
        cartItemRepository.deleteById(id);
        return true;
    }
}
