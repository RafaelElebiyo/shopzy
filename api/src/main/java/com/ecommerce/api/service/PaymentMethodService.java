package com.ecommerce.api.service;

import com.ecommerce.api.model.PaymentMethod;
import com.ecommerce.api.repository.PaymentMethodRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentMethodService {

    private final PaymentMethodRepository paymentMethodRepository;

    public PaymentMethodService(PaymentMethodRepository paymentMethodRepository) {
        this.paymentMethodRepository = paymentMethodRepository;
    }

    public List<PaymentMethod> getAllPaymentMethods() {
        return paymentMethodRepository.findAll();
    }

    public PaymentMethod getPaymentMethodById(Integer id) {
        return paymentMethodRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Payment method not found with id " + id));
    }

    public PaymentMethod createPaymentMethod(PaymentMethod paymentMethod) {
        return paymentMethodRepository.save(paymentMethod);
    }

    public PaymentMethod updatePaymentMethod(Integer id, PaymentMethod paymentMethod) {
        return paymentMethodRepository.findById(id).map(existing -> {
            existing.setName(paymentMethod.getName());
            return paymentMethodRepository.save(existing);
        }).orElseThrow(() -> new RuntimeException("Payment method not found with id " + id));
    }

    public boolean deletePaymentMethod(Integer id) {
        if (!paymentMethodRepository.existsById(id)) {
            return false;
        }
        paymentMethodRepository.deleteById(id);
        return true;
    }
}
