package com.ecommerce.api.service;

import com.ecommerce.api.model.Delivery;
import com.ecommerce.api.repository.DeliveryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeliveryService {
    private final DeliveryRepository deliveryRepository;
    public DeliveryService(DeliveryRepository deliveryRepository) {
        this.deliveryRepository = deliveryRepository;
    }
    public List<Delivery> getAllDeliveries() {
        return deliveryRepository.findAll();
    }  

    public Delivery getDeliveryById(Long id) {
        return deliveryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Delivery not found with id " + id));
    }

    public Delivery createDelivery(Delivery delivery) {
        return deliveryRepository.save(delivery);
    }

    public Delivery updateDelivery(Long id, Delivery delivery) {
        return deliveryRepository.findById(id).map(existing -> {
            existing.setOrder(delivery.getOrder());
            existing.setDeliveredAt(delivery.getDeliveredAt());
            return deliveryRepository.save(existing);
        }).orElseThrow(() -> new RuntimeException("Delivery not found with id " + id));
    }

    public boolean deleteDelivery(Long id) {
        if (!deliveryRepository.existsById(id)) {
            return false;
        }
        deliveryRepository.deleteById(id);
        return true;        
    }
}
