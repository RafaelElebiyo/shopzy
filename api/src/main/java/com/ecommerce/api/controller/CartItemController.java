package com.ecommerce.api.controller;

import com.ecommerce.api.model.CartItem;
import com.ecommerce.api.service.CartItemService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart-item")
public class CartItemController {
    private final CartItemService cartItemService;
    public CartItemController(CartItemService cartItemService) {
        this.cartItemService = cartItemService;
    }

    @GetMapping("/cart/{cartId}")
    public List<CartItem> getAllCartItemsByCartId(@PathVariable Integer cartId) {
        return cartItemService.getAllCartItemsByCartId(cartId);
    }

    @PostMapping("")
    public CartItem createCartItem(@RequestBody CartItem cartItem) {
        return cartItemService.createCartItem(cartItem);
    }

    @PutMapping("/{id}")
    public CartItem updateCartItem(@PathVariable Long id, @RequestBody CartItem cartItem) {
        return cartItemService.updateCartItem(id, cartItem);
    }

    @DeleteMapping("/{id}")
    public boolean deleteCartItem(@PathVariable Long id) {
        return cartItemService.deleteCartItem(id);
    }

}
