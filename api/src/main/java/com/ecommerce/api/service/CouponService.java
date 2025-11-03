package com.ecommerce.api.service;

import com.ecommerce.api.model.Coupon;
import com.ecommerce.api.repository.CouponRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CouponService {

    private final CouponRepository couponRepository;

    public CouponService(CouponRepository couponRepository) {
        this.couponRepository = couponRepository;
    }

    // Obtener todos los cupones
    public List<Coupon> getAllCoupons() {
        return couponRepository.findAll();
    }

    // Obtener cupón por ID
    public Coupon getCouponById(Long id) {
        return couponRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Coupon not found with id " + id));
    }

    // Crear cupón
    public Coupon createCoupon(Coupon coupon) {
        return couponRepository.save(coupon);
    }

    // Actualizar cupón
    public Coupon updateCoupon(Long id, Coupon coupon) {
        return couponRepository.findById(id).map(existing -> {
            existing.setCode(coupon.getCode());
            existing.setDiscountAmount(coupon.getDiscountAmount());
            existing.setEndDate(coupon.getEndDate());
            return couponRepository.save(existing);
        }).orElseThrow(() -> new RuntimeException("Coupon not found with id " + id));
    }

    // Eliminar cupón
    public boolean deleteCoupon(Long id) {
        if (!couponRepository.existsById(id)) {
            return false;
        }
        couponRepository.deleteById(id);
        return true;
    }
}
