package com.ecommerce.api.service;
import org.springframework.stereotype.Service;
import com.ecommerce.api.model.Payment;
import com.ecommerce.api.repository.PaymentRepository;
import java.util.List;
@Service
public class PaymentService {

    private final PaymentRepository paymentRepository;


    public PaymentService(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }
    public Payment getPaymentById(Long id) {
        return paymentRepository.findById(id).orElse(null);
    }   
    public Payment createPayment(Payment payment){
        return paymentRepository.save(payment);
    }

    public Payment updatePayment(Long id, Payment paymentDetails) {
        Payment payment = paymentRepository.findById(id).orElse(null);
        if (payment != null) {
            payment.setAmount(paymentDetails.getAmount());
            payment.setMethod(paymentDetails.getMethod());
            payment.setStatus(paymentDetails.getStatus());
            return paymentRepository.save(payment);
        }
        return null;
    }

    public boolean deletePayment(Long id) {
        if (paymentRepository.existsById(id)) {
            paymentRepository.deleteById(id);
            return true;
        }
        return false;
    }   
}
