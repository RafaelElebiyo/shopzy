package com.ecommerce.api.controller;

import com.ecommerce.api.model.Cart;
import com.ecommerce.api.service.CartService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
public class CartController {
    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @GetMapping("/{userId}/user")
    public Cart getCartByUserId (@PathVariable Long userId) {
        return cartService.getCartByUserId(userId);
    }
    @GetMapping("/{id}")
    public Cart getCartById(@PathVariable Long id) {
        return cartService.getCartById(id);
    }

    @PostMapping("")
    public Cart createCart(@RequestBody Cart cart) {
        return cartService.createCart(cart);
    }

    @PutMapping("/{id}")
    public Cart updateCart(@PathVariable Long id, @RequestBody Cart cart) {
        return cartService.updateCart(id, cart);
    }

    @DeleteMapping("/{id}")
    public boolean deleteCart(@PathVariable Long id) {
        return cartService.deleteCart(id);
    }

}
