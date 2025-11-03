package com.ecommerce.api.service;

import com.ecommerce.api.model.Address;
import com.ecommerce.api.repository.AddressRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressService {

    private final AddressRepository addressRepository;

    public AddressService(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    public List<Address> getAllAddresses() {
        return addressRepository.findAll();
    }

    public Address getAddressById(Long id) {
        return addressRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Address not found with id " + id));
    }

    public Address createAddress(Address address) {
        return addressRepository.save(address);
    }

    public Address updateAddress(Long id, Address address) {
        return addressRepository.findById(id).map(existing -> {
            existing.setStreet(address.getStreet());
            existing.setCity(address.getCity());
            existing.setState(address.getState());
            return addressRepository.save(existing);
        }).orElseThrow(() -> new RuntimeException("Address not found with id " + id));
    }

    public boolean deleteAddress(Long id) {
        if (!addressRepository.existsById(id)) {
            return false;
        }
        addressRepository.deleteById(id);
        return true;
    }
}
