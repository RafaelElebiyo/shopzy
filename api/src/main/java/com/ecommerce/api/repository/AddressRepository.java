package com.ecommerce.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ecommerce.api.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
